import styled, { css } from "styled-components";

type V4Datas = {
  likeIcon: JSX.Element;
  likeCounts: string;
  title: string;
  id: string;
  price: string;
  bid_link: string;
};

type V4Css = {};

type ToEdit = V4Datas & V4Css;
type Theme = { theme?: FluidTheme };
type FromLibrary = FluidStyled & Theme;

export type V4Props = ToEdit & FromLibrary;

const InfosData = (props: V4Props) => {
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
      {/* <div id="line3">
        
        <div id="likes">
          <div id="content">
            {props.likeIcon}
            <p id="counts">127</p>
          </div>
        </div>
      </div> */}
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

export const Infos_v4 = styled(InfosData)`
  display: grid;
  place-items: center;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 0.2fr 3fr 0.2fr 1.5fr 0.2fr;
  background-color: #1e8000;
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
      background-color: yellow;
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
      background-color: #001eff;
      ${grid}
      align-content: center;

      border: none;
    }
    #place-bid {
      grid-area: bid;
      background-color: #ff00e6;
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
      background-color: #0066ff;
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
