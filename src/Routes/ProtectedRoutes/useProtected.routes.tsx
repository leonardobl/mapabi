import { Route } from "react-router-dom";
import { ProtectedRoute } from "../../Components/Atoms/ProtectedRoute";
import { GeneralProduction } from "../../Components/Pages/GeneralProduction";
import { TrendReport } from "../../Components/Pages/TrendReport";
import { InspectorProductivity } from "../../Components/Pages/InspectorProductivity";

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
      <Route
        path="/tendencia"
        element={
          <ProtectedRoute>
            <TrendReport />
          </ProtectedRoute>
        }
      />

      <Route
        path="/producao-vistoriador"
        element={
          <ProtectedRoute>
            <InspectorProductivity />
          </ProtectedRoute>
        }
      />
    </>
  );
};
