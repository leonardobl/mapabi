import { FormLogin } from "../../Molecules/Forms/FormLogin";
import * as S from "./styles";
export const LoginTemplate = () => {
  return (
    <S.Container>
      <S.Left>
        <FormLogin submitForm={() => ""} />
      </S.Left>
      <S.Rigth></S.Rigth>
    </S.Container>
  );
};
