import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/SessionStorage/useSessionStorage";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // const { isAuth } = useContextSite();
  const [token] = useLocalStorage("@token");

  return token ? children : <Navigate to={"/login"} />;
};
