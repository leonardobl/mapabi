import { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { Title } from "../../../Atoms/Title";

interface IFormLogin extends ComponentProps<"form"> {
  submitForm: () => void;
}

export const FormLogin = ({ submitForm, ...rest }: IFormLogin) => {
  return (
    <S.Form {...rest} onSubmit={submitForm}>
      <Title>Login</Title>

      <p>Preencha seus dados para fazer login</p>

      <S.WrapperInputs>
        <div>
          <Input id="cpf" label="CPF" />
        </div>

        <div>
          <Input id="senha" label="Senha" type="password" />
        </div>
      </S.WrapperInputs>

      <Button>Entrar</Button>

      <a href="#">Esqueceu sua senha?</a>
    </S.Form>
  );
};
