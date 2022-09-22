// import { StaticImageData } from "next/image";
import { Album } from "./CardTypes/Album";
import { NftPfp } from "./CardTypes/NftPfp";
import { CardProps } from "./Types/Card";

export function Card<T>(props: CardProps<T>) {
  let { type } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => <NftPfp {...props}></NftPfp>;
      break;
    case "album":
      Element = () => <Album {...props}></Album>;
      break;
    default:
      Element = () => <NftPfp {...props}></NftPfp>;
      break;
  }
  return <Element></Element>;
}
