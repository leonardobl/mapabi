import { Route } from "react-router-dom";
import { ProtectedRoute } from "../../Components/Atoms/ProtectedRoute";
import { GeneralProduction } from "../../Components/Pages/GeneralProduction";
import { TrendReport } from "../../Components/Pages/TrendReport";
import { InspectorProductivity } from "../../Components/Pages/InspectorProductivity";
import { ServiceTypeReport } from "../../Components/Pages/ServiceTypeReport";

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
      />{" "}
      <Route
        path="/producao-tipo-servico"
        element={
          <ProtectedRoute>
            <ServiceTypeReport />
          </ProtectedRoute>
        }
      />
    </>
  );
};
