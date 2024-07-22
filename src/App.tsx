import { BrowserRouter, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { GlobalStyles } from "./Global/styles_global";
import { Theme } from "./Global/Theme";
import { ThemeProvider } from "styled-components";
import { useUnprotectedRoutes } from "./Routes/UnprotectedRoutes/useUnprotected.routes";
import { UseProtectedRoutes } from "./Routes/ProtectedRoutes/useProtected.routes";

function App() {
  const UnProtectedRoutes = useUnprotectedRoutes();
  const ProtectedRoutes = UseProtectedRoutes();

  return (
    <>
      <ThemeProvider theme={Theme}>
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
