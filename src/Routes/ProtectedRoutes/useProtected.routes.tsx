import { Route } from "react-router-dom";
import { ProtectedRoute } from "../../Components/Atoms/ProtectedRoute";
import { GeneralProduction } from "../../Components/Pages/GeneralProduction";

export const UseProtectedRoutes = () => {
  return (
    <>
      <Route
        path="/producao-geral"
        element={
          <ProtectedRoute>
            <GeneralProduction />
          </ProtectedRoute>
        }
      />
    </>
  );
};
