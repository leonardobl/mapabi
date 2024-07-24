import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  "data-error"?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container
      $showIcon={props.showIcon}
      data-error={props?.["data-error"] ? true : false}
    >
      <DatePicker
        {...props}
        required={false}
        // selected={value ? value : props.selected}
        onChange={(e, v) => {
          props.onChange(e, v);
        }}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="react-datepicker__navigation_wrapper">
            <button
              type="button"
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        dateFormat={"dd/MM/yyyy"}
        locale={"ptBR"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.9231 1.38462H15.2308V0.692308C15.2308 0.508696 15.1578 0.332605 15.028 0.202772C14.8982 0.0729393 14.7221 0 14.5385 0C14.3549 0 14.1788 0.0729393 14.0489 0.202772C13.9191 0.332605 13.8462 0.508696 13.8462 0.692308V1.38462H4.15385V0.692308C4.15385 0.508696 4.08091 0.332605 3.95107 0.202772C3.82124 0.0729393 3.64515 0 3.46154 0C3.27793 0 3.10184 0.0729393 2.972 0.202772C2.84217 0.332605 2.76923 0.508696 2.76923 0.692308V1.38462H2.07692C1.52609 1.38462 0.997815 1.60343 0.608317 1.99293C0.218818 2.38243 0 2.9107 0 3.46154V15.9231C0 16.4739 0.218818 17.0022 0.608317 17.3917C0.997815 17.7812 1.52609 18 2.07692 18H15.9231C16.4739 18 17.0022 17.7812 17.3917 17.3917C17.7812 17.0022 18 16.4739 18 15.9231V3.46154C18 2.9107 17.7812 2.38243 17.3917 1.99293C17.0022 1.60343 16.4739 1.38462 15.9231 1.38462ZM2.07692 2.76923H15.9231C16.1067 2.76923 16.2828 2.84217 16.4126 2.972C16.5424 3.10184 16.6154 3.27793 16.6154 3.46154V4.15385H1.38462V3.46154C1.38462 3.27793 1.45755 3.10184 1.58739 2.972C1.71722 2.84217 1.89331 2.76923 2.07692 2.76923ZM15.9231 16.6154H2.07692C1.89331 16.6154 1.71722 16.5424 1.58739 16.4126C1.45755 16.2828 1.38462 16.1067 1.38462 15.9231V5.53846H16.6154V15.9231C16.6154 16.1067 16.5424 16.2828 16.4126 16.4126C16.2828 16.5424 16.1067 16.6154 15.9231 16.6154Z"
              fill="#2D2D2D"
            />
            <path
              d="M4.15381 8.30766C4.15381 8.17074 4.19441 8.03689 4.27048 7.92304C4.34656 7.80919 4.45468 7.72045 4.58118 7.66806C4.70768 7.61566 4.84688 7.60195 4.98118 7.62866C5.11547 7.65537 5.23883 7.72131 5.33565 7.81813C5.43247 7.91495 5.49841 8.03831 5.52512 8.1726C5.55183 8.3069 5.53812 8.4461 5.48573 8.5726C5.43333 8.6991 5.34459 8.80723 5.23074 8.8833C5.11689 8.95937 4.98304 8.99997 4.84612 8.99997C4.6625 8.99997 4.48641 8.92703 4.35658 8.7972C4.22675 8.66737 4.15381 8.49128 4.15381 8.30766ZM8.99996 8.99997C9.13689 8.99997 9.27074 8.95937 9.38459 8.8833C9.49844 8.80723 9.58717 8.6991 9.63957 8.5726C9.69197 8.4461 9.70568 8.3069 9.67897 8.1726C9.65226 8.03831 9.58632 7.91495 9.4895 7.81813C9.39268 7.72131 9.26932 7.65537 9.13503 7.62866C9.00073 7.60195 8.86153 7.61566 8.73503 7.66806C8.60852 7.72045 8.5004 7.80919 8.42433 7.92304C8.34826 8.03689 8.30765 8.17074 8.30765 8.30766C8.30765 8.49128 8.38059 8.66737 8.51043 8.7972C8.64026 8.92703 8.81635 8.99997 8.99996 8.99997ZM13.1538 8.99997C13.2907 8.99997 13.4246 8.95937 13.5384 8.8833C13.6523 8.80723 13.741 8.6991 13.7934 8.5726C13.8458 8.4461 13.8595 8.3069 13.8328 8.1726C13.8061 8.03831 13.7402 7.91495 13.6433 7.81813C13.5465 7.72131 13.4232 7.65537 13.2889 7.62866C13.1546 7.60195 13.0154 7.61566 12.8889 7.66806C12.7624 7.72045 12.6542 7.80919 12.5782 7.92304C12.5021 8.03689 12.4615 8.17074 12.4615 8.30766C12.4615 8.49128 12.5344 8.66737 12.6643 8.7972C12.7941 8.92703 12.9702 8.99997 13.1538 8.99997ZM4.84612 11.7692C4.98304 11.7692 5.11689 11.7286 5.23074 11.6525C5.34459 11.5765 5.43333 11.4683 5.48573 11.3418C5.53812 11.2153 5.55183 11.0761 5.52512 10.9418C5.49841 10.8075 5.43247 10.6842 5.33565 10.5874C5.23883 10.4905 5.11547 10.4246 4.98118 10.3979C4.84688 10.3712 4.70768 10.3849 4.58118 10.4373C4.45468 10.4897 4.34656 10.5784 4.27048 10.6923C4.19441 10.8061 4.15381 10.94 4.15381 11.0769C4.15381 11.2605 4.22675 11.4366 4.35658 11.5664C4.48641 11.6963 4.6625 11.7692 4.84612 11.7692ZM8.99996 11.7692C9.13689 11.7692 9.27074 11.7286 9.38459 11.6525C9.49844 11.5765 9.58717 11.4683 9.63957 11.3418C9.69197 11.2153 9.70568 11.0761 9.67897 10.9418C9.65226 10.8075 9.58632 10.6842 9.4895 10.5874C9.39268 10.4905 9.26932 10.4246 9.13503 10.3979C9.00073 10.3712 8.86153 10.3849 8.73503 10.4373C8.60852 10.4897 8.5004 10.5784 8.42433 10.6923C8.34826 10.8061 8.30765 10.94 8.30765 11.0769C8.30765 11.2605 8.38059 11.4366 8.51043 11.5664C8.64026 11.6963 8.81635 11.7692 8.99996 11.7692ZM13.1538 11.7692C13.2907 11.7692 13.4246 11.7286 13.5384 11.6525C13.6523 11.5765 13.741 11.4683 13.7934 11.3418C13.8458 11.2153 13.8595 11.0761 13.8328 10.9418C13.8061 10.8075 13.7402 10.6842 13.6433 10.5874C13.5465 10.4905 13.4232 10.4246 13.2889 10.3979C13.1546 10.3712 13.0154 10.3849 12.8889 10.4373C12.7624 10.4897 12.6542 10.5784 12.5782 10.6923C12.5021 10.8061 12.4615 10.94 12.4615 11.0769C12.4615 11.2605 12.5344 11.4366 12.6643 11.5664C12.7941 11.6963 12.9702 11.7692 13.1538 11.7692ZM4.84612 14.5384C4.98304 14.5384 5.11689 14.4978 5.23074 14.4218C5.34459 14.3457 5.43333 14.2376 5.48573 14.1111C5.53812 13.9846 5.55183 13.8454 5.52512 13.7111C5.49841 13.5768 5.43247 13.4534 5.33565 13.3566C5.23883 13.2598 5.11547 13.1938 4.98118 13.1671C4.84688 13.1404 4.70768 13.1541 4.58118 13.2065C4.45468 13.2589 4.34656 13.3477 4.27048 13.4615C4.19441 13.5754 4.15381 13.7092 4.15381 13.8461C4.15381 14.0297 4.22675 14.2058 4.35658 14.3357C4.48641 14.4655 4.6625 14.5384 4.84612 14.5384ZM8.99996 14.5384C9.13689 14.5384 9.27074 14.4978 9.38459 14.4218C9.49844 14.3457 9.58717 14.2376 9.63957 14.1111C9.69197 13.9846 9.70568 13.8454 9.67897 13.7111C9.65226 13.5768 9.58632 13.4534 9.4895 13.3566C9.39268 13.2598 9.26932 13.1938 9.13503 13.1671C9.00073 13.1404 8.86153 13.1541 8.73503 13.2065C8.60852 13.2589 8.5004 13.3477 8.42433 13.4615C8.34826 13.5754 8.30765 13.7092 8.30765 13.8461C8.30765 14.0297 8.38059 14.2058 8.51043 14.3357C8.64026 14.4655 8.81635 14.5384 8.99996 14.5384ZM13.1538 14.5384C13.2907 14.5384 13.4246 14.4978 13.5384 14.4218C13.6523 14.3457 13.741 14.2376 13.7934 14.1111C13.8458 13.9846 13.8595 13.8454 13.8328 13.7111C13.8061 13.5768 13.7402 13.4534 13.6433 13.3566C13.5465 13.2598 13.4232 13.1938 13.2889 13.1671C13.1546 13.1404 13.0154 13.1541 12.8889 13.2065C12.7624 13.2589 12.6542 13.3477 12.5782 13.4615C12.5021 13.5754 12.4615 13.7092 12.4615 13.8461C12.4615 14.0297 12.5344 14.2058 12.6643 14.3357C12.7941 14.4655 12.9702 14.5384 13.1538 14.5384Z"
              fill="#2D2D2D"
            />
          </svg>
        }
      />
      {props.label && (
        <S.Label
          className={props?.["data-error"] ? "data-error" : ""}
          htmlFor={props?.id}
        >
          {props.label}
          {props.required && (
            <S.Required $isRequired={!!props.required}>*</S.Required>
          )}
        </S.Label>
      )}
    </S.Container>
  );
};
