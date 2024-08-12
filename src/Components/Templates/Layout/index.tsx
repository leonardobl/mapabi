import * as S from "./styles";
import { ComponentProps } from "react";
import { useLayout } from "./useLayout";
import { NavLink } from "react-router-dom";

interface ILayoutProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  headerTitle?: string;
}

export const Layout = ({ children, headerTitle, ...rest }: ILayoutProps) => {
  const { dataUser, logout } = useLayout();

  return (
    <S.Container {...rest}>
      <S.MenuBar>
        <S.MenuBarImg>
          <img
            src={`/assets/svg/logo-${import.meta.env.VITE_APP_PROJECT.toLowerCase()}-layout.svg`}
            alt="logo empresa"
          />
        </S.MenuBarImg>
        <S.MenuItens>
          <NavLink to={"/producao-geral"} title="Produção Geral">
            <img
              src="/assets/svg/icon-producao-geral.svg"
              alt="icone producao geral"
            />
            Produção Geral
          </NavLink>

          <NavLink to={"/tendencia"} title="Tendência">
            <img src="/assets/svg/icon-tendencia.svg" alt="icone Tendência" />
            Tendência
          </NavLink>

          <NavLink
            to={"/producao-vistoriador"}
            title="Produção por Vistoriador"
          >
            <img
              src="/assets/svg/icon-producao-vistoriador.svg"
              alt="icone producao geral"
            />
            Prod. por Vistoriador
          </NavLink>
        </S.MenuItens>
      </S.MenuBar>
      <S.Main>
        <S.MainHeader>
          <S.WrapperHeaderContent>
            <h2>{headerTitle}</h2>
            <S.WrapperHeaderImg>
              <img src="/assets/svg/icon-user.svg" alt="icone usuarios" />
              <div>
                <p>{dataUser?.nome?.split(" ")[0] || "Usuario"}</p>
                <button onClick={logout}>Sair</button>
              </div>
            </S.WrapperHeaderImg>
          </S.WrapperHeaderContent>
        </S.MainHeader>
        <S.MainContent>{children}</S.MainContent>
      </S.Main>
    </S.Container>
  );
};
