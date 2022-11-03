import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardArea } from "../../../../style";
import { Portrait } from "../../../../style/Areas/Shape/";
import { Head, Image } from "../../sections";
import { Infos_v2 } from "../../sections/Infos/";
import { NftPfpProps } from "../NftPfp";

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
        <Head {...props} />
        <Image
          handleisLoading={setIsLoading}
          src={props.src ? props.src : ""}
          width="100%"
          height="100%"
          display={imageLoaded ? "block" : "none"}
          imageLoaded={imageLoaded}
        />
        {/* <Infos_v2 {...props} likeIcon={props.likeIcon} /> */}
      </CardArea>
    </Area>
  );
}
