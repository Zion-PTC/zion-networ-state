import { ComponentClass } from "react";
import styled from "styled-components";
import { StyledDefault } from "../../../lib/types/utility";
import { Icon } from "../../Icon";
import {
  // ImageProps,
  ImageState,
  Image,
} from "../../Image";

enum ItemPage_v2Layouts {
  main = "main",
}
type ItemPage_v2LayoutTypes =
  keyof typeof ItemPage_v2Layouts;
class ItemPage_v2Layout extends BaseNoizLayout<
  ItemPage_v2LayoutTypes,
  ItemPage_v2Props
> {}

enum ItemPage_v2Styles {
  defaultStyle = "defaultStyle",
}
type ItemPage_v2StyleTypes =
  keyof typeof ItemPage_v2Styles;
class ItemPage_v2Style extends BaseNoizStyledLayout<
  ItemPage_v2StyleTypes,
  ItemPage_v2Props
> {}

export interface ItemPage_v2Props extends BaseNoizProps {
  src: string;
  layout?: ItemPage_v2LayoutTypes;
  style?: ItemPage_v2StyleTypes;
  data: {
    title: string;
    description: string;
    highestBid: string;
    info: string;
    creatorField: string;
    royalties: string;
    currency: string;
  };
}

export class ItemPage_v2Props extends BaseNoizProps {}
export interface ItemPage_v2State {
  src: string;
  isLoading: boolean;
  imageLoaded: boolean;
}

export class ItemPage_v2State {}

const main = new ItemPage_v2Layout();
main.name = ItemPage_v2Layouts.main;
main.component = function (
  this: ItemPage_v2,
  props: ItemPage_v2Props
) {
  // const src = this.state.src;
  // const Image = this.Image;
  const COLLECTION = "Collection";
  const CREATOR = "Creator";
  const ROYALTIES = "Royalties";
  const HIGHEST_BID = "highest bid:";

  return (
    <div className={props.className} css={props.css}>
      <div id="bg-upper"></div>
      {/* <Image src={src} gridArea="image"></Image> */}
      <div id="social">
        <button>
          <Icon like />
        </button>
        <button>
          <Icon like />
        </button>
      </div>
      <div id="infos">
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <div id="infos-text">
          <p>{HIGHEST_BID}</p>
          <p id="bold">{props.data.highestBid}</p>
          <p id="bold">{props.data.currency}</p>
        </div>
      </div>
      <div id="links">
        <div id="sublink">
          <div id="sublink-text-area">
            <p>{CREATOR}</p>
            <p>{props.data.royalties}</p>
            <p>{ROYALTIES}</p>
          </div>
          <div id="profile">
            <div id="avatar"></div>
            <p id="profile-id">Profile Name</p>
          </div>
        </div>
        <div id="sublink">
          <div id="sublink-text-area">
            <p>{COLLECTION}</p>
          </div>
          <div id="collection">
            <div id="avatar"></div>
            <p id="collection-id">Collection Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ItemPage_v2
  extends BaseNoiz<ItemPage_v2Props, ItemPage_v2State> {
  Image: ComponentClass<
    StyledDefault<{
      width?: string;
      height?: string;
      maxWidth?: string;
      backgroundColor?: string;
      borderTop?: string;
      gridArea?: string;
      display?: string;
      src: string;
      fullBorder?: boolean;
      image?: {
        width?: string;
        height?: string;
        maxWidth?: string;
      };
    }>,
    ImageState
  >;
}

export class ItemPage_v2 extends BaseNoiz<
  ItemPage_v2Props,
  ItemPage_v2State
> {
  layouts = [main];

  defaultStyle = styled(this.chooseLayout())`
    display: grid;
    width: 100%;
    height: 100%;
    overflow: auto;
    grid-template-rows: 5% 45% 10% 30% 10%;
    grid-template-columns: 5% 90% 5%;
    @media only screen and (min-width: 367px) {
      grid-template-rows: 5% 5% 35% 5% 5% 30% 15%;
      grid-template-columns: 5% 7% 76% 7% 5%;
      grid-template-areas:
        ". . . . ."
        ". . . . ."
        ". . image . ."
        ". . . . ."
        ". social social social ."
        ". infos infos infos ."
        ". links links links .";
    }
    grid-template-areas:
      ". . ."
      ". image ."
      ". social ."
      ". infos ."
      ". links .";
    div  {
      overflow: auto;
    }
    #bg-upper {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 60vw;
      max-height: 15rem;
      background-color: #c4c4c4;
    }
    #social {
      grid-area: social;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 50%;
      place-items: center;
      place-self: center;
      button {
        display: grid;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    #infos {
      grid-area: infos;
      display: inline;
      width: 100%;
      height: 100%;
      text-align: center;
      #infos-text {
        display: inline;
        p {
          display: inline;
          margin-right: 0.2rem;
          color: ${props => props.theme.palette.grey};
        }
        #bold {
          font-weight: bold;
          color: ${props => props.theme.palette.black};
        }
      }
    }
    #links {
      grid-area: links;
      font-size: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      #sublink {
        display: grid;
        grid-template-rows: 1fr 2fr;
        div {
          display: inline-flex;
        }
        #sublink-text-area {
          p {
            margin-right: 0.3rem;
          }
        }
        #avatar {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background-color: red;
        }
        #profile,
        #collection {
          place-items: center;
          div {
            margin-right: 0.3rem;
          }
        }
      }
    }
  `;

  styledlayouts = [
    new ItemPage_v2Style({
      name: ItemPage_v2Styles.defaultStyle,
      style: this.StyledHtml,
    }),
  ];

  Image: ComponentClass<
    StyledDefault<{
      width?: string;
      height?: string;
      maxWidth?: string;
      backgroundColor?: string;
      borderTop?: string;
      gridArea?: string;
      display?: string;
      // handleisLoading: Dispatch<SetStateAction<boolean>>;
      src: string;
      fullBorder?: boolean;
      // imageLoaded: boolean;
      image?: {
        width?: string;
        height?: string;
        maxWidth?: string;
      };
    }>,
    ImageState
  > = Image;

  constructor(props: ItemPage_v2Props) {
    super(props);
    let state = new ItemPage_v2State();
    state.isLoading = true;
    state.imageLoaded = false;
    state.src = props.src;
    this.layouts[0]?.component.bind(this);
    this.state = state;
  }

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };
  setImageLoaded = (imageLoaded: boolean) => {
    this.setState({ imageLoaded: imageLoaded });
  };
  setSrc = (src: string) => {
    this.setState({ src: src });
  };

  checkLoadingStatus = () => {
    !this.state.isLoading
      ? this.setImageLoaded(true)
      : this.setImageLoaded(false);
    this.setSrc(this.props.src);
  };

  componentDidMount() {
    this.checkLoadingStatus();
  }

  render() {
    let Element = this.chooseStyle();
    console.log(Element);
    Element = this.defaultStyle;

    return <Element {...this.props}></Element>;
  }
}
