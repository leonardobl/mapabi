import { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { Title } from "../../../Atoms/Title";
import { useFormLogin } from "./useFormLogin";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { IAutenticacaoForm } from "../../../../Types/autenticacao";

interface IFormLogin extends ComponentProps<"form"> {
  submitForm: (data: IAutenticacaoForm) => void;
}

export const FormLogin = ({ submitForm, ...rest }: IFormLogin) => {
  const { errors, handleSubmit, register } = useFormLogin();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <Title>Login</Title>

      <p>Preencha seus dados para fazer login</p>

      <S.WrapperInputs>
        <div>
          <Input
            {...register("cpfCNPJ")}
            id="cpf"
            label="CPF"
            maxLength={14}
            data-error={!!errors?.cpfCNPJ}
          />
          {errors?.cpfCNPJ && (
            <ErrorMessage>{errors.cpfCNPJ.message}</ErrorMessage>
          )}
        </div>

        <div>
          <Input
            {...register("senha")}
            id="senha"
            label="Senha"
            type="password"
            data-error={!!errors?.senha}
          />
          {errors?.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </div>
      </S.WrapperInputs>

      <Button data-variante-dark>Entrar</Button>

      <Link to={"#"}>Esqueceu sua senha?</Link>
    </S.Form>
  );
};
