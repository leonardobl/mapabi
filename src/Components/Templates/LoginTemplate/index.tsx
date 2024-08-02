import { FormLogin } from "../../Molecules/Forms/FormLogin";
import * as S from "./styles";
import { useLogin } from "./useLogin";
export const LoginTemplate = () => {
  const { submiteForm } = useLogin();

  return (
    <S.Container>
      <S.Left>
        <FormLogin submitForm={submiteForm} />
      </S.Left>
      <S.Rigth></S.Rigth>
    </S.Container>
  );
};
