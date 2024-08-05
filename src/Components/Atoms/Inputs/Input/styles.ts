import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  position: relative;

  &[data-error="true"] {
    img {
      filter: brightness(0) saturate(100%) invert(16%) sepia(71%)
        saturate(7434%) hue-rotate(10deg) brightness(98%) contrast(128%);
    }
  }

  > img {
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 26px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px;
  }

  > img#iconLeft {
    position: absolute;
    left: 10px;
  }

  > img#iconRight {
    padding-left: 1rem;
    display: block;
    cursor: default;
    height: fit-content;
  }
`;

export const MyInput = styled.input`
  height: 44px;
  border-radius: 10px;
  outline: none;
  /* letter-spacing: 1px; */
  border: 1px solid ${(props) => props.theme.colors["gray-100"]};
  transition: all 0.2s ease-in-out;

  /* &::placeholder {
    color: ${(props) => (props.placeholder ? "" : "transparent")};
  } */

  /* &:focus + label {
    top: -1px;
  } */

  /* &:not(:placeholder-shown) + label {
    top: -1px;
  } */

  width: 100%;
  border-radius: 12px;
  border: 0.5px solid ${(props) => props.theme.colors["gray-100"]};
  background: #fff;
  padding: 0 36px 0 16px;
  font-size: 12px;
  font-weight: 400;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors["black"]} !important;
  }

  &[data-error="true"] {
    border-color: red;
    & + label {
      color: red;
    }
  }

  &:disabled {
    background-color: ${darken(0.04, "#fff")};

    cursor: not-allowed;

    /* + label {
      background: linear-gradient(
        to top,
        ${darken(0.04, "#fff")} 50%,
        transparent 50%
      );
    } */
  }
`;

export const MyLabel = styled.label`
  transition: all 0.2s ease-in-out;
  position: absolute;
  left: 20px;
  top: -9px;
  /* transform: translateY(-50%); */
  z-index: 1;
  padding: 0 4px;
  pointer-events: none;

  color: rgba(0, 0, 0, 0.56);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  background: linear-gradient(to top, #fff 50%, transparent 50%);

  #asterisk {
    color: red;
  }
`;
