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
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM2 7H18V4H2V7Z"
              fill="#9D9D9D"
            />
            <path d="M15.9353 10H13.8326V12.1027H15.9353V10Z" fill="#9D9D9D" />
            <path d="M12.991 10H10.8883V12.1027H12.991V10Z" fill="#9D9D9D" />
            <path d="M10.047 10H7.94434V12.1027H10.047V10Z" fill="#9D9D9D" />
            <path d="M7.10268 10H5V12.1027H7.10268V10Z" fill="#9D9D9D" />
            <path
              d="M10.047 12.9448H7.94434V15.0475H10.047V12.9448Z"
              fill="#9D9D9D"
            />
            <path
              d="M15.9353 12.9448H13.8326V15.0475H15.9353V12.9448Z"
              fill="#9D9D9D"
            />
            <path
              d="M15.9353 15.8878H13.8326V17.9905H15.9353V15.8878Z"
              fill="#9D9D9D"
            />
            <path
              d="M12.991 12.9448H10.8883V15.0475H12.991V12.9448Z"
              fill="#9D9D9D"
            />
            <path
              d="M12.991 15.8878H10.8883V17.9905H12.991V15.8878Z"
              fill="#9D9D9D"
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
