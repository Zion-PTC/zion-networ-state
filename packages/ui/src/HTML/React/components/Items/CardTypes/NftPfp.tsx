import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../../GlobalSections/Image";
import { Infos, Infos_v2 } from "../sections/Infos";
import {
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { CardArea } from "../../../style/Areas/CardArea";
import { Portrait } from "../../../style/Areas/Shape/";

export interface NftPfpProps {
  likeIcon: JSX.Element;
  menuIcon: JSX.Element;
  id?: number;
  name?: string;
  slug?: string;
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  src?: string;
  backgroundColor?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
}

export const AreaOld = styled(Portrait)`
  height: 100%;
  display: grid;
`;

export function NftPfp(props: NftPfpProps) {
  let { backgroundColor } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
  }, [isLoading]);

  return (
    <AreaOld
      portrait
      mid
      backgroundColor={backgroundColor}
      onClick={() =>
        (window.location.href = `http://localhost:3000/nft/${props.id}`)
      }
      // onClick={() => console.log("clicked" + props.id)}
    >
      <CardArea nft>
        <Head menuIcon={props.menuIcon} />
        <Image
          handleisLoading={setIsLoading}
          src={props.src ? props.src : ""}
          width="100%"
          height="100%"
          display={imageLoaded ? "block" : "none"}
          imageLoaded={imageLoaded}
        />
        <Infos likeIcon={props.likeIcon} />
      </CardArea>
    </AreaOld>
  );
}
const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

export function NftPfp_v2(props: NftPfpProps) {
  let { backgroundColor } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
  }, [isLoading]);

  return (
    <Area
      portrait
      mid
      backgroundColor={backgroundColor}
      onClick={() =>
        (window.location.href = `http://localhost:3000/nft/${props.id}`)
      }
      // onClick={() => console.log("clicked" + props.id)}
    >
      <CardArea nft>
        <Head menuIcon={props.menuIcon} />
        <Image
          handleisLoading={setIsLoading}
          src={props.src ? props.src : ""}
          width="100%"
          height="100%"
          display={imageLoaded ? "block" : "none"}
          imageLoaded={imageLoaded}
        />
        <Infos_v2 likeIcon={props.likeIcon} />
      </CardArea>
    </Area>
  );
}
