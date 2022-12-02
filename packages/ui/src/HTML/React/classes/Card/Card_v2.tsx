import { createRef, RefObject } from "react";
import styled, {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";
import {
  GComponent,
  StyledGComponent,
} from "../../lib/global/BaseNoiz/BaseNoiz_v3";
import { StyledDefault } from "../../lib/types/utility";
import { roundDecimals } from "../../lib/util";
import { DebugColor } from "../../lib/util/classes";
import { RemainingPercentage } from "../../lib/util/classes/RemainingPercentage";
import { Icon } from "../Icon";
import { Image } from "../Image";

export interface Card_v2PropsType {}

export interface Card_v2Props extends BaseNoizProps {
  id: number;
  slug: string;
  src: string;

  likeCounts: string;
  title: string;
  item_id: string;
  price: string;
  bid_link: string;

  small?: boolean;
  mid?: boolean;
  big?: boolean;
}

export class Card_v2Props extends BaseNoizProps {
  constructor(props: Card_v2Props) {
    super(props);
    this.id = props.id;
    this.slug = props.slug;
    this.src = props.src;
    this.small = props.small;
    this.mid = props.mid;
    this.big = props.big;
    this.likeCounts = props.likeCounts;
    this.title = props.title;
    this.item_id = props.item_id;
    this.price = props.price;
    this.bid_link = props.bid_link;
  }
}
export interface Card_v2State {
  headHeight: number;
  src: string;
  debug?: boolean;
}
export class Card_v2State {}

export interface Card_v2
  extends BaseNoiz<Card_v2Props, Card_v2State> {
  widthinblocks: number;
  totalHeightInBlocks: number;
  ratio: number;
  heightinblocks: number;
  heightinpercentage: number;
  heightInPercentage: number;
  percentage: RemainingPercentage;
  container: RefObject<HTMLDivElement>;
  filled: FlattenSimpleInterpolation;
  grid: FlattenSimpleInterpolation;
  debug: boolean;
  CardHeadDebug: DebugColor;
  InfosDebug: DebugColor;
  titleDebug: DebugColor;
  floorPriceDebug: DebugColor;
  placeBidDebug: DebugColor;
  likesDebug: DebugColor;
  handleHeight(headHeight: number): void;
  Head: GComponent<
    StyledDefault<{
      clientHeight: number;
    }>
  >;
  Infos: GComponent<
    StyledDefault<{
      likeCounts: string;
      title: string;
      id: string;
      price: string;
      bid_link: string;
    }>
  >;
  StyledInfos: StyledGComponent<
    StyledDefault<{
      likeCounts: string;
      title: string;
      id: string;
      price: string;
      bid_link: string;
    }>
  >;
  Social: GComponent<{}>;
  StyledSocial: StyledGComponent<{}>;
  Card: GComponent<Card_v2Props>;
  StyledCard: StyledGComponent<Card_v2Props>;
}

export class Card_v2 extends BaseNoiz<
  Card_v2Props,
  Card_v2State
> {
  widthinblocks = 8;
  totalHeightInBlocks = 14;
  ratio = 4 / 5;
  heightinblocks = this.widthinblocks / this.ratio;
  heightinpercentage =
    this.heightinblocks / this.totalHeightInBlocks;
  heightInPercentage = roundDecimals(
    this.heightinpercentage,
    1000
  );
  percentage = new RemainingPercentage(
    this.heightInPercentage
  );
  filled1 = css`
    height: 100%;
    width: 100%;
  `;
  grid = css`
    display: grid;
  `;
  InfosDebug = new DebugColor(
    "hsl(105, 100%, 25%)",
    this.debug
  );
  debug = false;
  CardHeadDebug = new DebugColor("red", this.debug);
  titleDebug = new DebugColor("yellow", this.debug);
  floorPriceDebug = new DebugColor("#001eff", this.debug);
  placeBidDebug = new DebugColor("#ff00e6", this.debug);
  likesDebug = new DebugColor("#0066ff", this.debug);

  constructor(props: Card_v2Props) {
    super(props);
    let state = new Card_v2State();
    state.headHeight = 0;
    state.src = props.src;
    state.debug = false;
    this.state = state;
    this.container = createRef();
  }
  Head = (
    props: StyledDefault<{
      clientHeight: number;
    }>
  ) => {
    return (
      <div
        className={props.className}
        css={props.css}
        id="card-head"
      >
        <div id="circle" />
        <div></div>
        <button id="menu">
          <Icon />
        </button>
      </div>
    );
  };

  StyledHead = styled(this.Head)`
    ${this.CardHeadDebug.value};
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    border-top: none;
    display: grid;
    place-items: center;
    grid-template-columns:
      ${props => props.clientHeight.toString()}px
      1fr
      ${props => props.clientHeight.toString()}px;
    #circle {
      border-radius: 100%;
      width: 60%;
      height: 60%;
      border: 0.05rem solid;
      background-color: #e5e5e5;
    }
    button {
      display: grid;
      background-color: transparent;
      border: none;
    }
  `;

  Infos = (
    props: StyledDefault<{
      likeCounts: string;
      title: string;
      id: string;
      price: string;
      bid_link: string;
    }>
  ) => {
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

  StyledInfos = styled(this.Infos)`
    display: grid;
    place-items: center;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    grid-template-columns: 0.1fr 2fr 0.1fr;
    grid-template-rows: 0.2fr 3fr 0.2fr 1.5fr 0.2fr;
    ${this.InfosDebug.value}
    grid-template-areas:
    ". . ."
    ". line1 ."
    ". . ."
    ". line2 ."
    ". . ."
    ". line3 ."
    ". . .";
    #line1 {
      ${this.filled1}
      ${this.grid}
    
    grid-template-columns: 0.02fr 1fr 0.02fr;
      grid-template-rows: 0.02fr 1fr 0.02fr;
      grid-template-areas:
        ". . ."
        ". title ."
        ". . .";
      grid-area: line1;
      #title {
        grid-area: title;
        ${this.titleDebug.value}
        ${this.grid}
      align-content: center;

        border: none;
      }
    }
    #line2 {
      ${this.filled1}
      ${this.grid}
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
        ${this.floorPriceDebug.value};
        ${this.grid}
        align-content: center;

        border: none;
      }
      #place-bid {
        grid-area: bid;
        ${this.placeBidDebug.value};
        ${this.grid}

        border: none;
        align-content: center;
        a {
          place-self: end;
        }
      }
    }
    #line3 {
      ${this.filled1}
      ${this.grid}
    font-size:80%;
      grid-template-columns: 0.08fr 1fr 0.08fr 1fr 0.08fr;
      grid-template-rows: 0.4fr 1fr 0.4fr;
      grid-template-areas:
        ". . . . ."
        ". bid . likes ."
        ". . . . .";
      grid-area: line3;

      #likes {
        ${this.grid}
        align-content: center;
        grid-area: likes;
        ${this.likesDebug.value};
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

  Social: GComponent<{}> = () => {
    return (
      <div id="social">
        <button>
          <Icon arrowLeft />
        </button>
        <button>
          <Icon />
        </button>
        <button>
          <Icon />
        </button>
        <div></div>
        <button id="last">
          <div id="svg">
            <Icon />
          </div>
        </button>
      </div>
    );
  };

  StyledSocial = styled(this.Social)`
    div {
      overflow: auto;
    }
    #social {
      display: grid;
      overflow: auto;
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
  `;

  handleHeadHeight = (headHeight: number) => {
    this.setState({ headHeight });
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          src: "https://ipfs.io/ipfs/QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R?filename=QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R",
        }),
      2000
    );
    const self = this.container;
    if (self) {
      if (self.current) {
        if (self.current.firstChild) {
          if (self.current.firstChild.firstChild) {
            const head = self.current.firstChild
              .firstChild as HTMLDivElement;
            const height = head.clientHeight;
            this.handleHeadHeight(height);
          }
        }
      }
    }
  }

  Card = (props: Card_v2Props) => {
    const Head = this.StyledHead;
    const StyledInfos = this.StyledInfos;
    const StyledSocial = this.StyledSocial;
    return (
      <div
        className={props.className}
        css={props.css}
        ref={this.container}
      >
        <div id="card">
          <Head clientHeight={this.state.headHeight} />
          <Image src={this.state.src} />
          <StyledInfos
            bid_link={props.bid_link}
            id={props.item_id}
            likeCounts={props.likeCounts}
            price={props.price}
            title={props.title}
          />
          <StyledSocial />
        </div>
      </div>
    );
  };

  Card_v3 = styled(this.Card)`
    display: grid;
    grid-column: span 8;
    grid-row: span 14;
    ${this.StyledHead} {
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
      grid-template-rows: ${this.percentage.fixed} ${this
          .percentage.variable} ${this.percentage.rest} ${this
          .percentage.restB};
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

  render() {
    let Element = this.Card_v3;
    return <Element {...this.props}></Element>;
  }
}
