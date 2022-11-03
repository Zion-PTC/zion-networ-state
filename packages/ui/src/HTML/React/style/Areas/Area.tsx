import styled, { css } from "styled-components";
import {
  AlbumProps,
  NftPfpProps,
} from "../../components/Items/CardTypes";
import {
  ImageProps,
  InfosProps,
} from "../../components/Items/sections";
import { border1PxSolid_wo_top } from "../common/border";

type AreaTypes = {
  cardHead?: boolean;
  cardInfos?: boolean;
  image?: boolean;
  infos?: boolean;
};

type AreaStyle = {
  width?: number;
  height?: number;
  blockSize?: number;
  columns?: number;
  avatarSize?: number;
};

type UsedBy = NftPfpProps &
  AlbumProps &
  ImageProps &
  InfosProps;

type AreaStyled = AreaStyle &
  UsedBy &
  FluidStyled &
  AreaTypes;

const defaultArea = css<ImageProps & AreaStyle>`
  width: ${props => props.width}px;
  height: 100%;
  grid-auto-rows: ${props => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${props => props.columns},
    ${props => props.blockSize + "px"}
  );
  overflow: auto;
`;

const cardHeadArea = css<AreaStyle>`
  z-index: 1;
  grid-template-columns: ${props => props.avatarSize}px 4fr 1fr;
  grid-template-rows: 1fr;
  border-top: 1px solid;
  ${border1PxSolid_wo_top}
`;

const cardInfos = styled.div<AreaStyled>`
  ${border1PxSolid_wo_top}
  grid-template-columns: 1fr 1fr;
`;

const infos = styled.div<AreaStyled>`
  width: 100%;
  height: 100%;
  grid-template-rows: 2fr 1fr 1fr;
`;

const image = css<ImageProps>`
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

export const Area = styled.div<any>`
  display: grid;
  place-items: center;
  ${props => (props.cardHead ? cardHeadArea : defaultArea)}
  ${props => (props.cardInfos ? cardInfos : defaultArea)}
  ${props => (props.infos ? infos : defaultArea)}
  ${props => props.image && image}
`;

export const Area2 = styled.div<any>`
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

export const Area3 = styled.div<any>`
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;
