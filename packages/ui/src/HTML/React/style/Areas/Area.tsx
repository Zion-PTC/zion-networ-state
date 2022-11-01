import styled, { css } from "styled-components";
import { InfosProps } from "../../components/Items/sections";
import { CssStyled, StyledCss } from "../../lib";

type AreaStyle = {
  width?: number;
  height?: number;
  blockSize?: number;
  columns?: number;
  cardHead?: boolean;
  cardInfos?: boolean;
  infos?: boolean;
  avatarSize?: number;
} & StyledCss &
  CssStyled &
  InfosProps;

export type ImageAreaCss = {
  width?: string;
  height?: string;
  maxWidth?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
} & CssStyled &
  StyledCss;

const defaultArea = css<AreaStyle>`
  width: ${props => props.width}px;
  height: 100%;
  grid-auto-rows: ${props => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${props => props.columns},
    ${props => props.blockSize + "px"}
  );
  overflow: auto;
`;

const border1PxSolid_wo_top = css`
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;

const cardHeadArea = css<{ avatarSize?: number }>`
  z-index: 1;
  grid-template-columns: ${props => props.avatarSize}px 4fr 1fr;
  grid-template-rows: 1fr;
  border-top: 1px solid;
  ${border1PxSolid_wo_top}
`;

const cardInfos = styled.div<InfosProps>`
  ${border1PxSolid_wo_top}
  grid-template-columns: 1fr 1fr;
`;

const infos = styled.div`
  width: 100%;
  height: 100%;
  grid-template-rows: 2fr 1fr 1fr;
`;

export const Area = styled.div<AreaStyle>`
  display: grid;
  place-items: center;
  ${props => (props.cardHead ? cardHeadArea : defaultArea)}
  ${props => (props.cardInfos ? cardInfos : defaultArea)}
  ${props => (props.infos ? infos : defaultArea)}
`;

export const Area2 = styled.div<ImageAreaCss>`
  z-index: 1;
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : "transparent"};
  //
  ${props => {
    if (props.borderTop)
      return `border-top: ${props.borderTop} solid;`;
  }}
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  overflow: hidden;
  ${props => {
    if (props.gridArea)
      return `grid-area: ${props.gridArea};`;
  }}
`;

export type LogoImageProps = CssStyled & StyledCss;
export const Area3 = styled.div<LogoImageProps>`
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;
