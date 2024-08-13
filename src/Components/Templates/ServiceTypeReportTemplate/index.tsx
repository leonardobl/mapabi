import { FormFilterServiceTypeReport } from "../../Molecules/Forms/FormFilterServiceTypeReport";
import { Layout } from "../Layout";
import * as S from "./styles";

export const ServiceTypeReportTemplate = () => {
  return (
    <Layout headerTitle="Produtividade por Tipo de Serviço">
      <S.Container>
        <div>
          <FormFilterServiceTypeReport />
        </div>
      </S.Container>
    </Layout>
  );
};
