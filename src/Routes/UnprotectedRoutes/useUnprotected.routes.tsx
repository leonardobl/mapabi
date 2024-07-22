import { Route, Navigate } from "react-router-dom";
import { Login } from "../../Components/Pages/Login";

export const useUnprotectedRoutes = () => {
  return (
    <>
      <Route index element={<Navigate to={"/producao-geral"} />} />
      <Route path="login" element={<Login />} />
    </>
  );
};
