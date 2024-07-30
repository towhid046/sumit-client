import { createContext, useEffect, useState, ReactNode } from "react";
import { auth, googleProvider } from "../firebase.config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { AuthInfoProps } from "../CommonTypes/CommonTypes";

interface AuthProps {
  children: ReactNode;
}

export const UserContext = createContext<AuthInfoProps | null>(null);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const registerUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = (): Promise<void> => {
    return signOut(auth);
  };

  const updateUserProfile = (
    displayName: string,
    photoURL: string
  ): Promise<void> => {
    return updateProfile(auth?.currentUser, { displayName, photoURL });
  };

  const loginWithGoogle = (): Promise<UserCredential> => {
    return signInWithPopup(auth, googleProvider);
  };

  // Track the current user status
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo: AuthInfoProps = {
    user,
    loading,
    registerUser,
    loginUser,
    logOutUser,
    updateUserProfile,
    loginWithGoogle,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
