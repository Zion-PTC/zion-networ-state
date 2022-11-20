import {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { DebugColor } from "../../lib/util/classes";
import { Icon } from "../Icon";
import { Image } from "../Image";

/////// TYPES
export type Card_v1Data = {
  // CARD
  id: number;
  name: string;
  slug: string;
  src: string;
  backgroundColor: string;
  // clickHandler?: MouseEventHandler<HTMLElement>;
  infos: {
    likeIcon: JSX.Element;
    likeCounts: string;
    title: string;
    id: string;
    price: string;
    bid_link: string;
  };
  headProps: {
    menuIcon?: JSX.Element;
    circle?: {
      borderColor?: string;
      cardHead?: boolean;
      small?: boolean;
      badge?: boolean;
      logoImage?: boolean;
      size?: Size;
    };
    clientHeight: number;
    menuIconProps?: {
      primary?: boolean;
      secondary?: boolean;
      disabled?: boolean;
      onClick?: MouseEventHandler<HTMLButtonElement>;
      size?: Sizes;
      position?: Position;
      zIndex?: string;
      gridArea?: string;
      child?: { justifySelf?: string };
    };
  };

  // SUB
  clientHeight: number;
  title: string;
  price: string;
  bid_link: string;
};

export type Card_v1Booleans = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type Card_v1Props = NoizProps<
  Card_v1Data & Card_v1Booleans
>;

export type Card_v1ClassBooleans = {};

export type Card_v1ClassProps = utility.Flatten<
  NoizDatas<Card_v1Props> & Card_v1ClassBooleans
>;

export type Card_v1AsChild = MakeAsChild<
  "Card",
  Card_v1ClassProps
>;
/////////////

////////CLASS
export class Card_v1 extends BaseNoiz<
  Card_v1Data & Card_v1Booleans,
  Card_v1ClassBooleans
> {
  constructor(props: Card_v1ClassProps) {
    super(props);
  }
  Html = (props: Card_v1Props) => {
    return (
      <div className={props.className}>
        {props.clientHeight}
      </div>
    );
  };

  Style = styled(this.Html)``;

  Mapper = Card_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }

  CardHeadData(
    props: StyledDefault<Card_v1Props["headProps"]>
  ) {
    return (
      <div
        className={props.className}
        css={props.css}
        id="card-head"
      >
        <div id="circle" />
        <div></div>
        <button id="menu">
          <Icon datas={[]} />
        </button>
      </div>
    );
  }
  debug = false;

  CardHeadDebug = new DebugColor("red", this.debug);

  CardHead = styled(this.CardHeadData)`
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

  CardInfosData = (
    props: StyledDefault<Card_v1Props["infos"]>
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

  titleDebug = new DebugColor("yellow", this.debug);
  floorPriceDebug = new DebugColor("#001eff", this.debug);
  placeBidDebug = new DebugColor("#ff00e6", this.debug);
  likesDebug = new DebugColor("#0066ff", this.debug);

  Infos = styled(this.CardInfosData)`
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

  SocialData() {
    return (
      <div id="social">
        <button>
          <Icon datas={[]} />
        </button>
        <button>
          <Icon datas={[]} />
        </button>
        <button>
          <Icon datas={[]} />
        </button>
        <div></div>
        <button id="last">
          <div id="svg">
            <Icon datas={[]} />
          </div>
        </button>
      </div>
    );
  }

  Social = styled(this.SocialData)`
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

  Card_v3Data(props: Card_v1Props) {
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
          <this.CardHead
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
          <this.Infos {...props.infos} />
          <this.Social />
        </div>
      </div>
    );
  }
}
