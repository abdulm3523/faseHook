import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth?.user ? "You are login" : "You are Logout");
  return useContext(AuthContext);
};

export default useAuth;
