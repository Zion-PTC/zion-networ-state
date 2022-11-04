import {
  MouseEventHandler,
  PropsWithRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { roundDecimals } from "../../../../lib/util/calculate/";
import { CardArea } from "../../../../style";
import { Portrait } from "../../../../style/Areas/Shape/";
import { LogoZion } from "../../../Icons/LogoZion";
import { Head, Image, Infos } from "../../sections";
import { HeadProps_v1 } from "../../sections/Head/";
import { InfosProps } from "../../sections/Infos";

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

class RemainingPercentage {
  fixed: string;
  variable: string;
  rest: string;
  restB: string;
  constructor(num: number) {
    const fixed = 0.1;
    this.fixed = (fixed * 100).toString() + "%";
    this.variable = (num * 100).toString() + "%";
    const rest = RemainingPercentage.#remainingPercentage(
      fixed,
      num
    );
    const ratio = 0.7;
    const sectionA = ratio * rest;
    const sectionB = rest - sectionA;
    this.rest = (sectionA * 100).toString() + "%";
    this.restB = (sectionB * 100).toString() + "%";
  }
  static #remainingPercentage = (a: number, b: number) => {
    const result = 1 - a - b;
    if (result < 0) throw new Error("100% exceeded");
    return result;
  };
}

const percentage = new RemainingPercentage(
  heightInPercentage
);
export type NftPfpDatas = {
  id?: number;
  name?: string;
  slug?: string;
  src?: string;
  backgroundColor?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
  infos: InfosProps;
  headProps: HeadProps_v1;
};

export type NftPfpCss = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type ToEdit = NftPfpDatas & NftPfpCss;
export type Theme = { theme: FluidTheme };
export type FromLibrary = FluidStyled & Theme;

export type NftPfpProps = ToEdit & FromLibrary;

export function NftPfpData(
  props: PropsWithRef<NftPfpProps>
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
    // @ts-ignore
    <div
      className={props.className}
      css={props.css}
      ref={self as RefObject<HTMLDivElement>}
    >
      <div id="card">
        {/* <div id="a"></div>
        <div id="b">
          <img src={src}></img>
        </div>
        <div id="c"></div>
        <div id="d"></div> */}
        <Head
          {...props.headProps}
          clientHeight={headHeight}
        />
        <Image
          handleisLoading={setIsLoading}
          src={src}
          width="100%"
          height="100%"
          display={imageLoaded ? "block" : "none"}
          imageLoaded={imageLoaded}
        />
        <Infos {...props.infos} />
        <div id="social">
          <button>
            <LogoZion />
          </button>
          <button>
            <LogoZion />
          </button>
          <button>
            <LogoZion />
          </button>
          <div></div>
          <button id="last">
            <div id="svg">
              <LogoZion />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export const NftPfp_v4 = styled(NftPfpData)`
  /* height: 100%;
  width: 100%; */
  display: grid;
  grid-column: span 8;
  grid-row: span 14;
  #card {
    height: 90%;
    width: 90%;
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
    /* border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid; */
    button {
      display: grid;
      width: 100%;
      border: none;
      background-color: transparent;
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
