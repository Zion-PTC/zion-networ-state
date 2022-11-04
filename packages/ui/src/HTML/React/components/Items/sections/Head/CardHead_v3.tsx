import styled from "styled-components";
import { ButtonStyle } from "../../../../style";
import { CircleStyle } from "../../../../style/Areas";
import { LogoZion } from "../../../Icons/LogoZion";

export type HeadProps_v1 = {
  menuIcon?: JSX.Element;
  circle?: CircleStyle;
  clientHeight: number;
  menuIconProps?: ButtonStyle;
} & StyledDefault &
  CssStyled;

export type HeadProps_v2 = CircleStyle & CssStyled;

type HeadProps = HeadProps_v1;

export function CardHeadData(props: HeadProps) {
  return (
    <div
      className={props.className}
      css={props.css}
      id="card-head"
      onLoad={() => console.log("loaded")}
    >
      <div id="circle" />
      <div></div>
      <button id="menu">
        <LogoZion />
      </button>
    </div>
  );
}

export const CardHead_v3 = styled(CardHeadData)`
  background-color: red;
  /* border: 1px solid black; */
  display: grid;
  place-items: center;
  grid-template-columns:
    ${props => props.clientHeight.toString()}px
    1fr
    ${props => props.clientHeight.toString()}px;
  #circle {
    border-radius: 100%;
    width: 60%;
    height: 60%;
    border: 0.05rem solid;
    background-color: #e5e5e5;
  }
  button {
    display: grid;
    background-color: transparent;
    border: none;
  }
`;
