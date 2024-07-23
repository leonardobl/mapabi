import { useEffect } from "react";
import { useLocalStorage } from "../../../Hooks/SessionStorage/useSessionStorage";
import { useLocation } from "react-router-dom";
import { useContextSite } from "../../../Context/Context";

export const useLayout = () => {
  const [dataUser] = useLocalStorage("dataUser");
  const { pathname } = useLocation();
  const { setIsLoad } = useContextSite();

  function logout() {
    setIsLoad(true);

    setTimeout(() => {
      localStorage.clear();
      window.open("/login", "_self");
      setIsLoad(false);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return { dataUser, logout };
};
