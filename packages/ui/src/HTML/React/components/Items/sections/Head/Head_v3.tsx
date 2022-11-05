import styled from "styled-components";
import { DebugColor } from "../../../../lib/util/classes";
import { ButtonStyle } from "../../../../style";
import { CircleStyle } from "../../../../style/Areas";
import { LogoZion } from "../../../Icons/LogoZion";

type Head_v3Datas = {
  menuIcon?: JSX.Element;
  circle?: CircleStyle;
  clientHeight: number;
  menuIconProps?: ButtonStyle;
};

type Head_v3Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = Head_v3Datas & Head_v3Css;
type Theme = { theme: FluidTheme };
type FromLibrary = FluidStyled & Theme;

export type Head_v3Props = ToEdit & FromLibrary;

export function CardHeadData_v3(props: Head_v3Props) {
  return (
    <div
      className={props.className}
      css={props.css}
      id="card-head"
    >
      <div id="circle" />
      <div></div>
      <button id="menu">
        <LogoZion />
      </button>
    </div>
  );
}

const debug = false;

const CardHeadDebug = new DebugColor("red", debug);

export const CardHead_v3 = styled(CardHeadData_v3)`
  ${CardHeadDebug.value};
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  border-top: none;
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
