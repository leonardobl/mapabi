import { IDatesFilterProps } from "../../Molecules/Forms/FormFilterGeneral/useFormFilterGeneral";

export const useGeneralProduction = () => {
  async function handleFilter(data: IDatesFilterProps) {
    console.log(data);
  }

  return { handleFilter };
};
