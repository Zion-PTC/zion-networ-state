import {
  MouseEventHandler,
  PropsWithRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { CardArea } from "../../../../style";
import { Portrait } from "../../../../style/Areas/Shape/";
import { Head, Image, Infos } from "../../sections";
import { InfosProps } from "../../sections/Infos";

interface NftPfpProps {
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
  infos: InfosProps;
}

const AreaOld = styled(Portrait)<
  PropsWithRef<NftPfpProps>
>`
  height: 100%;
  display: grid;
`;

export function NftPfp_v3(props: NftPfpProps) {
  let { backgroundColor } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [headHeight, setHeadHeight] = useState(0);
  const [src, setSrc] = useState("");
  const self = useRef<HTMLDivElement>();

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
    if (self) {
      if (self.current) {
        if (self.current.firstChild) {
          const firstChild = self.current.firstChild;
          if (firstChild.firstChild) {
            const head =
              firstChild.firstChild as HTMLDivElement;
            const height = head.clientHeight;
            setHeadHeight(height);
          }
        }
      }
    }
  }, [isLoading]);

  setTimeout(
    () =>
      setSrc(
        "https://ipfs.io/ipfs/QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R?filename=QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R"
      ),
    2000
  );

  return (
    // @ts-ignore
    <AreaOld
      ref={self as RefObject<HTMLDivElement>}
      portrait
      mid
      backgroundColor={backgroundColor}
      onClick={() =>
        (window.location.href = `http://localhost:3000/nft/${props.id}`)
      }
    >
      <CardArea nft>
        <Head {...props} clientHeight={headHeight} />
        <Image
          handleisLoading={setIsLoading}
          src={src}
          width="100%"
          height="100%"
          display={imageLoaded ? "block" : "none"}
          imageLoaded={imageLoaded}
        />
        <Infos {...props.infos} />
      </CardArea>
    </AreaOld>
  );
}
