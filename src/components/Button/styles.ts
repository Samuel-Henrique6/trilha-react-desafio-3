import styled, { css } from "styled-components";
import { IButtonStyle } from "./types";

export const ButtonContainer = styled.button<IButtonStyle>`
  background: #565656;
  border-radius: 22px;
  border: none;
  position: relative;
  display: block;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  margin: 10px auto;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}

  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: rgb(134, 71, 173);

      &::after {
        content: "";
        position: absolute;
        border: 1px solid rgb(134, 71, 173);
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
