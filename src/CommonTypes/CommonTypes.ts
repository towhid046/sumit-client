export interface AuthInfoProps {
  user: object | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logOutUser: () => Promise<void>;
}

export interface Inputs {
  name: string;
  email: string;
  imgObject: object;
  password: string;
}
