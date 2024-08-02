import { useEffect } from "react";
import { toast } from "react-toastify";
import { IAutenticacaoForm, IDecodedToken } from "../../../Types/autenticacao";
import { useContextSite } from "../../../Context/Context";
import { useLocalStorage } from "../../../Hooks/SessionStorage/useSessionStorage";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../../../Services/Cliente";
import { removeDigitos } from "../../../Util/masks";
import { Autenticacao } from "../../../Services/Autenticacao";

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

        return decoded;
      })
      .then((decoded) => {
        Cliente.clienteLogado({ uuidUsuario: decoded.uuid })
          .then(({ data }) => {
            const dataUser = JSON.parse(
              localStorage.getItem("dataUser") as string
            );

            setDataUser({
              ...dataUser,
              cliente: data,
            });
          })
          .catch(
            ({
              response: {
                data: { mensagem },
              },
            }) => console.log(mensagem)
          );

        toast.success("Login efetuado com sucesso");

        setTimeout(() => {
          navigate("/");
        }, 2000);
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
