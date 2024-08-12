import { Button } from "../../Atoms/Button";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Layout } from "../Layout";
import * as S from "./styles";

export const InspectorProductivityTemplates = () => {
  return (
    <Layout headerTitle="Produtividade por Vistoriador">
      <S.Container>
        <S.FormFilter>
          <div>
            <SimpleSelect />
          </div>
          <div>
            <Button>Filtrar</Button>
          </div>
        </S.FormFilter>
      </S.Container>
    </Layout>
  );
};
