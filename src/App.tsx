import { BrowserRouter, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { GlobalStyles } from "./Global/styles_global";
import { Theme } from "./Global/Theme";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { useUnprotectedRoutes } from "./Routes/UnprotectedRoutes/useUnprotected.routes";
import { UseProtectedRoutes } from "./Routes/ProtectedRoutes/useProtected.routes";
import { ToastContainer } from "react-toastify";

function App() {
  const UnProtectedRoutes = useUnprotectedRoutes();
  const ProtectedRoutes = UseProtectedRoutes();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <ToastContainer
          autoClose={2000}
          theme="colored"
          position="top-center"
        />
        <GlobalStyles />
        <ContextProvider>
          <BrowserRouter>
            <Routes>{UnProtectedRoutes}</Routes>
            <Routes>{ProtectedRoutes}</Routes>
          </BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
