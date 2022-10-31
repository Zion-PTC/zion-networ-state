import { HTML } from "@zionstate/ui";
import React from "react";
import styled, { css } from "styled-components";

const width = 20;
const height = 6;
const ratio = width / height;

const Circle = HTML.React.components.Pages.sections.Circle;
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
  if (!props.size) return defaultSize;
  if (props.size === "small") return smallSize;
  if (props.size === "mid") return midSize;
  if (props.size === "big") return bigSize;
};

const BadgeArea = styled.div<BadgeProps>`
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
  background: ${props => props.theme.body};
  border-radius: 4px;
  place-items: center;
`;

const LogoArea = styled.div`
  grid-area: logo;
  width: 100%;
  height: 100%;
`;

const InfosArea = styled.div<{ css_: { color: string } }>`
  grid-area: infos;
  text-align: center;
  color: ${props => props.css_.color};
  h3 {
    margin: 0;
  }
`;

type BadgeProps = {
  size?: "small" | "mid" | "big";
  theme: any;
};

export default function Badge(props: BadgeProps) {
  const darkgrey = props.theme.palette.darkgrey;
  const border = `2px solid ${props.theme.palette.grey}`;
  return (
    <BadgeArea size={props.size}>
      <LogoArea>
        <Circle
          size={{ width: "100%", height: "100%" }}
          css_={{
            border,
            backgroundColor: darkgrey,
            boxSizing: "border-box",
          }}
        />
      </LogoArea>
      <InfosArea
        css_={{ color: props.theme.palette.grey }}
      >
        <p>ZION 2</p>
        <h3>SILVER</h3>
      </InfosArea>
    </BadgeArea>
  );
}
