import React from "react";
import styled, { css } from "styled-components";
import { Circle } from "../../../style";
import { LogoZion } from "../../Icons/LogoZion";

const width = 20;
const height = 6;
const ratio = width / height;

type BadgeProps = {
  size?: "small" | "mid" | "big";
  className?: string;
  theme?: FluidTheme;
};

const BadgeCircle = styled(Circle)`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border: 2px solid ${props => props.theme.palette.grey};
  background-color: darkgrey;
  box-sizing: border-box;
`;
// TODO risolvere il problema che non coincidono i
// types di size
// TODO #7 (questo issue è diverso da quello appena qui sopra).
export function BadgeData(props: BadgeProps) {
  return (
    <div className={props.className}>
      <div id="logo">
        <div id="badge-circle">
          <LogoZion {...(props as any)}></LogoZion>
        </div>
      </div>
      <div id="infos">
        <p>ZION 2</p>
        <h3>SILVER</h3>
      </div>
    </div>
  );
}

const defaultSize = css`
  width: 100%;
  height: 100%;
`;

const calculateSize = (ratio: number, height: number) => {
  const width = height * ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
};

const smallSize = calculateSize(ratio, 3);
const midSize = calculateSize(ratio, 4);
const bigSize = calculateSize(ratio, 5);

const checkSize = (props?: BadgeProps) => {
  if (!props) return;
  if (!props.size) return defaultSize;
  if (props.size === "small") return smallSize;
  if (props.size === "mid") return midSize;
  if (props.size === "big") return bigSize;
};

export const Badge_v2 = styled(BadgeData)`
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
  #infos {
    grid-area: infos;
    text-align: center;
    color: ${props => props.theme.palette.grey};
    h3 {
      margin: 0;
    }
  }
`;

export const Badge_v1 = Badge_v2;