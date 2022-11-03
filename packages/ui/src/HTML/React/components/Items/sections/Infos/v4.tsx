import styled, { css } from "styled-components";
import { Area, Social, TextArea } from "../../../../style";
import { SVGButton } from "../../../../style/Buttons";
import {
  border1PxSolid_wo_top,
  filled,
} from "../../../../style/common";
import { grid } from "../../../../style/common/display";
import { InfosProps } from "../Infos";

const NftTitle = TextArea;
const FloorPrice = TextArea;
const PlaceBid = TextArea;
const Likes = TextArea;

const LikeIcon = styled.div`
  width: 100%;
  grid-area: like;
  display: grid;
  place-items: end;
`;

const JustifiedButton = styled(SVGButton)`
  justify-self: center;
`;

export const InfosData = (props: InfosProps) => {
  return (
    <div className={props.className} css={props.css}>
      <div id="line1">
        <div id="title">
          <p>Title Here</p>
        </div>
      </div>
      <div id="line2">
        <div id="floor-price">
          <p>From 0.32 Eth 1/20</p>
        </div>
      </div>
      <div id="line3">
        <div id="place-bid">
          <p>Place a bid</p>
        </div>
        <div id="likes">
          <div id="content">
            <p id="icona">{props.likeIcon}icona</p>
            <p id="counts">127</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const filled1 = css`
  height: 100%;
  width: 100%;
`;

export const Infos_v4 = styled(InfosData)`
  display: grid;
  place-items: center;
  ${filled1}
  ${border1PxSolid_wo_top}
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 0.2fr 3fr 0.2fr 1.5fr 0.2fr 1fr 0.4fr;
  background-color: #1e8000;
  grid-template-areas:
    ". .     ."
    ". line1 ."
    ". .     ."
    ". line2 ."
    ". .     ."
    ". line3 ."
    ". .     ";
  #line1 {
    ${filled1}
    ${grid}
    grid-template-columns: 0.04fr 1fr 0.04fr;
    grid-template-rows: 0.4fr 1fr 0.4fr;
    grid-template-areas:
      ". . ."
      ". title ."
      ". . .";
    grid-area: line1;
    #title {
      grid-area: title;
      background-color: yellow;
      ${grid}
      align-content: center;
    }
  }
  #line2 {
    ${filled1}
    ${grid}
    font-size:90%;
    grid-template-columns: 0.04fr 1fr 0.04fr;
    grid-template-rows: 0.4fr 1fr 0.4fr;
    grid-template-areas:
      ". . ."
      ". floor ."
      ". . .";
    grid-area: line2;
    #floor-price {
      grid-area: floor;
      background-color: #001eff;
      ${grid}
      align-content: center;
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
    #place-bid {
      grid-area: bid;
      background-color: #ff00e6;
      ${grid}
      align-content: center;
    }
    #likes {
      ${grid}
      align-content: center;
      grid-area: likes;
      background-color: #0066ff;
      #content {
        display: inline-flex;
        place-content: end;
        p {
          margin-right: 0.3rem;
          height: auto;
        }
      }
    }
  }
`;
