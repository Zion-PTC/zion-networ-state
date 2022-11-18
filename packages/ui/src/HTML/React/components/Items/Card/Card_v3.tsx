import {
  // MouseEventHandler,
  PropsWithRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Head, HeadProps } from "./Head";
import { Infos, InfosProps } from "./Infos";
import { Social } from "./Social";
import { RemainingPercentage } from "../../../lib/util/classes/RemainingPercentage";
import { roundDecimals } from "../../../lib/util/calculate/roundDecimals";
import { Image } from "../../../classes";

const widthinblocks = 8;
const totalHeightInBlocks = 14;
const ratio = 4 / 5;
const heightinblocks = widthinblocks / ratio;
const heightinpercentage =
  heightinblocks / totalHeightInBlocks;
const heightInPercentage = roundDecimals(
  heightinpercentage,
  1000
);

const percentage = new RemainingPercentage(
  heightInPercentage
);

export type Card_v3Datas = {
  id: number;
  name: string;
  slug: string;
  src: string;
  backgroundColor: string;
  // clickHandler?: MouseEventHandler<HTMLElement>;
  infos: InfosProps;
  headProps: HeadProps;
};

export type Card_v3Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type ToEdit = Card_v3Datas & Card_v3Css;

export type Card_v3Props = StyledDefault<ToEdit>;

export function Card_v3Data(
  props: PropsWithRef<Card_v3Props>
) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [headHeight, setHeadHeight] = useState(0);
  const [src, setSrc] = useState("");
  const self = useRef<HTMLDivElement>();

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
  }, [isLoading]);

  useEffect(() => {
    if (self) {
      if (self.current) {
        if (self.current.firstChild) {
          if (self.current.firstChild.firstChild) {
            const head = self.current.firstChild
              .firstChild as HTMLDivElement;
            const height = head.clientHeight;
            setHeadHeight(height);
          }
        }
      }
    }
  });

  setTimeout(
    () =>
      setSrc(
        "https://ipfs.io/ipfs/QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R?filename=QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R"
      ),
    2000
  );

  return (
    <div
      className={props.className}
      css={props.css}
      ref={self as RefObject<HTMLDivElement>}
    >
      <div id="card">
        <Head
          {...props.headProps}
          clientHeight={headHeight}
        />
        <Image
          datas={[
            {
              handleisLoading: setIsLoading,
              src,
              width: "100%",
              height: "",
              display: imageLoaded ? "block" : "none",
              imageLoaded,
            },
          ]}
          imageLoaded={imageLoaded}
        />
        <Infos {...props.infos} />
        <Social />
      </div>
    </div>
  );
}

export const Card_v3 = styled(Card_v3Data)`
  display: grid;
  grid-column: span 8;
  grid-row: span 14;
  ${Head} {
    button {
      cursor: pointer;
    }
  }
  #card {
    height: 90%;
    width: 90%;

    border: 1px solid rgba(0, 0, 0, 0.8);
    display: grid;
    place-self: center;
    background-color: transparent;
    grid-template-columns: 1fr;
    grid-template-rows: ${percentage.fixed} ${percentage.variable} ${percentage.rest} ${percentage.restB};
  }
  #social {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 5fr 1fr;
    align-items: center;
    border: none;

    button {
      display: grid;
      width: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;
      #svg {
        place-self: end;
        display: grid;
        place-items: center;
      }
    }
  }
  div {
    overflow: auto;
  }
`;
