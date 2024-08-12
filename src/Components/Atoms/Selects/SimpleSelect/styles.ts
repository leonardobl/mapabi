import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & div.react-select__control {
    cursor: pointer;
    border-radius: 10px;
    height: 44px;
    /* width: 100%; */
  }

  & div.react-select__control--is-focused {
    border: 1px solid #9d9d9d;
    box-shadow: none;
  }

  & div.react-select__indicator {
    margin-right: 3px;
  }

  &:has(input:focus) {
    label {
      top: -2px;
    }
  }

  & div.react-select__control--is-disabled {
    background-color: ${darken(0.04, "#fff")};
  }

  &:has(input:disabled) {
    cursor: not-allowed;
    label {
      background: transparent;
    }
  }

  &:not([data-custom-error="true"]):has(input:focus) {
    label {
      color: #9d9d9d;
    }
  }

  &:has(.react-select__single-value) {
    label {
      top: -2px;
    }
  }

  &:has(.react-select__multi-value) {
    label {
      top: -2px;
    }
  }

  &[data-custom-error="true"] {
    .react-select__control {
      border: 1px solid red;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  background: linear-gradient(to top, #fff 50%, transparent 50%);
  display: flex;
  padding: 0 4px;
  color: rgba(0, 0, 0, 0.56);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  pointer-events: none;

  &[data-custom-error="true"] {
    color: red;
  }
`;

export const Required = styled.span`
  color: rgba(237, 0, 0, 1);
  display: block;
`;

export const IconSearch = styled.img`
  position: absolute;
  top: 50%;
  display: block;
  transform: translateY(-50%);
  left: 20px;
`;
