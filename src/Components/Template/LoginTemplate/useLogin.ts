import { useEffect } from "react";
import { toast } from "react-toastify";
import { IAutenticacaoForm, IDecodedToken } from "../../../Types/autenticacao";
import { useContextSite } from "../../../Context/Context";
import { useLocalStorage } from "../../../Hooks/SessionStorage/useSessionStorage";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { removeDigitos } from "../../../Util/masks";
import { Autenticacao } from "../../../Services/Autenticacao";
import { RolesEnum } from "../../../Enum/roles";

export const useLogin = () => {
  const { setIsLoad } = useContextSite();
  const [token, setToken] = useLocalStorage("@token");
  const [, setDataUser] = useLocalStorage("dataUser");
  const navigate = useNavigate();

  function submiteForm(data: IAutenticacaoForm) {
    setIsLoad(true);

    const PAYLOAD: IAutenticacaoForm = {
      cpfCNPJ: removeDigitos(data.cpfCNPJ),
      senha: data.senha,
    };

    Autenticacao.post(PAYLOAD)
      .then(({ data }) => {
        setToken(data.token);
        return data.token;
      })
      .then((token) => {
        const decoded = jwtDecode<IDecodedToken>(token);

        setDataUser({
          uuidUsuario: decoded.uuid,
          usuarioCpfCnpj: decoded.sub,
          roles: decoded.perfis,
          type: decoded.type,
          nome: decoded.nome,
        });

        if (decoded?.perfis?.includes([RolesEnum.ROLE_ADMIN, RolesEnum.ROLE_GERENTE])) {
          toast.success("Login efetuado com sucesso");
            localStorage.clear();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          localStorage.clear();
          toast.error("Acesso não permitido!");
        }

        
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, []);

  return { submiteForm };
};
