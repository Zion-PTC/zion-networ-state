// import { StaticImageData } from "next/image";
import { Album } from "./CardTypes/Album";
import { NftPfp } from "./CardTypes/NftPfp";
import { Card as CardTypes } from "./types";

export function Card(props: CardTypes.CardProps) {
  let { type, backgroundColor } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => (
        <NftPfp src={props.src} backgroundColor={backgroundColor}></NftPfp>
      );
      break;
    case "album":
      Element = () => (
        <Album src={props.src} backgroundColor={backgroundColor}></Album>
      );
      break;
    default:
      Element = () => (
        <NftPfp src={props.src} backgroundColor={backgroundColor}></NftPfp>
      );
      break;
  }
  return <Element></Element>;
}
