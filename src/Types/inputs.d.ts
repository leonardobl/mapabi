import { ComponentProps } from "react";

export interface ISelectOptions<T> {
  value: string;
  label: string;
  element?: T;
}

interface InputCustomProps extends ComponentProps<"input"> {
  label?: string;
  required?: boolean;
  iconleft?: string;
  iconright?: string;
}
