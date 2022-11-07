import styled, { css } from "styled-components";
import { DebugColor } from "../../../../lib/util/classes";

type Infos_v1Datas = {
  likeIcon: JSX.Element;
  likeCounts: string;
  title: string;
  id: string;
  price: string;
  bid_link: string;
};

type Infos_v1Css = {};

type ToEdit = Infos_v1Datas & Infos_v1Css;
type FromLibrary = StyledDefault;

export type Infos_v1Props = ToEdit & FromLibrary;

const Infos_v4Data = (props: Infos_v1Props) => {
  return (
    <div className={props.className} css={props.css}>
      <div id="line1">
        <div id="title">
          <p>{props.title}</p>
        </div>
      </div>
      <div id="line2">
        <div id="floor-price">
          <p>
            From {props.price} Eth {props.id}
          </p>
        </div>
        <div id="place-bid">
          <a href={props.bid_link}>
            <p>Place a bid</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const filled1 = css`
  height: 100%;
  width: 100%;
`;

const grid = css`
  display: grid;
`;

const debug = false;

const Infos_v1Debug = new DebugColor(
  "hsl(105, 100%, 25%)",
  debug
);
const titleDebug = new DebugColor("yellow", debug);
const floorPriceDebug = new DebugColor("#001eff", debug);
const placeBidDebug = new DebugColor("#ff00e6", debug);
const likesDebug = new DebugColor("#0066ff", debug);

export const Infos_v1 = styled(Infos_v4Data)`
  display: grid;
  place-items: center;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 0.2fr 3fr 0.2fr 1.5fr 0.2fr;
  ${Infos_v1Debug.value}
  grid-template-areas:
    ". . ."
    ". line1 ."
    ". . ."
    ". line2 ."
    ". . ."
    ". line3 ."
    ". . .";
  #line1 {
    ${filled1}
    ${grid}
    
    grid-template-columns: 0.02fr 1fr 0.02fr;
    grid-template-rows: 0.02fr 1fr 0.02fr;
    grid-template-areas:
      ". . ."
      ". title ."
      ". . .";
    grid-area: line1;
    #title {
      grid-area: title;
      ${titleDebug.value}
      ${grid}
      align-content: center;

      border: none;
    }
  }
  #line2 {
    ${filled1}
    ${grid}
    font-size:80%;
    grid-template-columns: 0.06fr 1.8fr 0.06fr 1fr 0.06fr;
    grid-template-rows: 0.06fr 1fr 0.06fr;
    grid-template-areas:
      ". . . . ."
      ". floor . bid ."
      ". . . . .";
    grid-area: line2;

    border: none;
    #floor-price {
      grid-area: floor;
      ${floorPriceDebug.value};
      ${grid}
      align-content: center;

      border: none;
    }
    #place-bid {
      grid-area: bid;
      ${placeBidDebug.value};
      ${grid}

      border: none;
      align-content: center;
      a {
        place-self: end;
      }
    }
  }
  #line3 {
    ${filled1}
    ${grid}
    font-size:80%;
    grid-template-columns: 0.08fr 1fr 0.08fr 1fr 0.08fr;
    grid-template-rows: 0.4fr 1fr 0.4fr;
    grid-template-areas:
      ". . . . ."
      ". bid . likes ."
      ". . . . .";
    grid-area: line3;

    #likes {
      ${grid}
      align-content: center;
      grid-area: likes;
      ${likesDebug.value};
      #content {
        display: inline-flex;
        place-content: end;
        a {
          p {
            margin-right: 0.3rem;
            height: auto;
          }
        }
      }
    }
  }
`;
