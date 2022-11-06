import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { LogoZion } from "../../Icons/LogoZion";

type Badge_v2Datas = {
  name?: string;
};

type Badge_v2Css = {
  size?: "small" | "mid" | "big";
};

type ToEdit = Badge_v2Datas & Badge_v2Css;
type Theme = { theme: FluidTheme };
type FromLibrary = FluidStyled & Theme;

export type Badge_v2Props = ToEdit & FromLibrary;

export const Badge_v2Data = (
  props: PropsWithChildren<Badge_v2Props>
) => {
  return (
    <div className={props.className}>
      <div id="logo">
        <div id="badge-circle">
          <LogoZion {...(props as any)}></LogoZion>
        </div>
      </div>
      <div id="badge-infos">
        <p>ZION 2</p>
        <h3>SILVER</h3>
      </div>
    </div>
  );
};

const calculateSize = (ratio: number, height: number) => {
  const width = height * ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
};

const width = 20;
const height = 6;
const ratio = width / height;

const smallSize = calculateSize(ratio, 3);
const midSize = calculateSize(ratio, 4);
const bigSize = calculateSize(ratio, 5);

const defaultSize = css`
  width: 100%;
  height: 100%;
`;

const checkSize = (props?: Badge_v2Props) => {
  if (!props) return;
  if (!props.size) return defaultSize;
  if (props.size === "small") return smallSize;
  if (props.size === "mid") return midSize;
  if (props.size === "big") return bigSize;
};

export const Badge_v2 = styled(Badge_v2Data)`
  display: grid;
  ${props => checkSize(props)}
  grid-template-columns: 10% 23% 57% 10%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". . . ."
    ". logo infos ."
    ". . . .";
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: #e5e5e5;
  border-radius: 4px;
  place-items: center;
  #logo {
    grid-area: logo;
    width: 100%;
    height: 100%;
    #badge-circle {
      border-radius: 100%;

      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      border: 2px solid
        ${props => props.theme.palette.grey};
      background-color: darkgrey;
      box-sizing: border-box;
    }
  }
  #badge-infos {
    grid-area: infos;
    text-align: center;
    color: ${props => props.theme.palette.grey};
    h3 {
      margin: 0;
    }
  }
`;
