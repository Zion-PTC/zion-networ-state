import styled, { css } from "styled-components";

const nft = css`
  background-color: transparent;
  grid-template-rows: 1.4fr 9fr 2.8fr;
`;

const album = css`
  background-color: hsl(0, 0%, 93%);
  grid-template-rows: 1.4fr 6fr 1fr 1.8fr;
`;

export const CardArea = styled.div<{
  album?: boolean;
  nft?: boolean;
}>`
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  ${props => props.album && album}
  ${props => props.nft && nft}
`;

// export const CardAreaOld = styled.div`
//   background-color: #eeeeee;
//   height: 90%;
//   width: 90%;
//   display: grid;
//   place-self: center;
//   grid-template-rows: 1.4fr 6fr 1fr 1.8fr;
// `;

// export const CardArea1 = styled.div`
//   background-color: transparent;
//   height: 90%;
//   width: 90%;
//   display: grid;
//   place-self: center;
//   grid-template-rows: 1.4fr 9fr 2.8fr;
// `;
