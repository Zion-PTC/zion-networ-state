import React from "react";
import styled, { css } from "styled-components";

const width = 20;
const height = 6;
const ratio = width / height;

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
  background-color: white;
  grid-template-columns: 10% 20% 60% 10%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". . . ."
    ". logo infos ."
    ". . . .";
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
`;

const LogoArea = styled.div`
  grid-area: logo;
`;
const InfosArea = styled.div`
  grid-area: infos;
`;
const Circolo = styled.div`
  justify-self: center;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background-color: rgba(136, 136, 136, 1);
  border: 2px solid rgba(196, 196, 196, 1);
`;

type BadgeProps = {
  size?: "small" | "mid" | "big";
};

export default function Badge(props: BadgeProps) {
  return (
    <BadgeArea size={props.size}>
      <LogoArea>
        <Circolo />
      </LogoArea>
      <InfosArea></InfosArea>
    </BadgeArea>
  );
}
