import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../../GlobalSections/Image";
import { Infos } from "../sections/Infos";
import { Portrait } from "../Shapes/Portrait";
import { NftPfpProps } from "./Types/NftPfp";
import { useEffect, useState } from "react";

const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

const CardArea = styled.div`
  background-color: transparent;
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  grid-template-rows: 1.4fr 9fr 2.8fr;
`;

export function NftPfp(props: NftPfpProps) {
  let { backgroundColor } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    !isLoading ? setImageLoaded(true) : setImageLoaded(false);
  }, [isLoading]);

  return (
    <Area
      backgroundColor={backgroundColor}
      onClick={() =>
        (window.location.href = `http://localhost:3000/nft/${props.id}`)
      }
      // onClick={() => console.log("clicked" + props.id)}
    >
      <CardArea>
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
    </Area>
  );
}
