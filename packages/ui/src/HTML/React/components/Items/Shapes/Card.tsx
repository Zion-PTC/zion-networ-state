export {};
// import styled from "styled-components";
// import { Album } from "../Album";
// import { NftPfp } from "../NftPfp";
// import { Square } from "./Square";
// import { CardProps } from "./types";
// Square;
// Album;

// const Area = styled.div<{
//   colSpan: number;
//   rowSpan: number;
//   backgroundColor?: string;
//   width: number;
// }>`
//   background-color: ${(props) => props.backgroundColor};
//   grid-column: span ${(props) => props.colSpan};
//   grid-row: span ${(props) => props.rowSpan};
//   width: ${(props) => props.width};
// `;

// export function Card(props: CardProps) {
//   let { type, backgroundColor } = props;
//   let Element: () => JSX.Element;
//   switch (type) {
//     case "nft-pfp":
//       Element = () => <NftPfp backgroundColor={backgroundColor}></NftPfp>;
//       break;
//     // case "album":
//     //   Element = () => <Album backgroundColor={backgroundColor}></Album>;
//     //   break;
//     default:
//       Element = () => <NftPfp backgroundColor={backgroundColor}></NftPfp>;
//       break;
//   }
//   return <Element></Element>;
// }
