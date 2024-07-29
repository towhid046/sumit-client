import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";
import { AuthInfoProps } from './../CommonTypes/CommonTypes';

const useAuth: () => AuthInfoProps= () => {
  return useContext(UserContext);
};

export default useAuth;
