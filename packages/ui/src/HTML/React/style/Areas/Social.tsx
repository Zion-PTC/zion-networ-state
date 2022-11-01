import styled, { css } from "styled-components";

type SocialStyled = {
  cardInfos?: boolean;
};

const filled = css`
  width: 100%;
  height: 100%;
`;

const cardInfosArea = css`
  ${filled}
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ". ." "like count";
  place-items: center;
`;

export const Social = styled.div<SocialStyled>`
  display: grid;
  width: 50%;
  ${props => props.cardInfos && cardInfosArea}
`;
