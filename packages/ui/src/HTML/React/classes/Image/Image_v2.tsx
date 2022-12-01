import styled, { keyframes } from "styled-components";

export interface Image_v2PropsType {
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
}

export interface Image_v2Props
  extends BuildProps<Image_v2PropsType>,
    BaseNoizProps {}

export class Image_v2Props extends BaseNoizProps {
  constructor(props: BuildProps<Image_v2PropsType>) {
    super(props);
    this.datas = props.datas;
  }
}
export interface Image_v2State {
  isLoading: boolean;
  src: string;
}

export class Image_v2 extends BaseNoiz<
  Image_v2Props,
  Image_v2State
> {
  constructor(props: Image_v2Props) {
    super(props);
    this.state = { isLoading: true, src: "" };
  }

  // componentDidMount() {
  //   this.setState({ isLoading: false });
  // }

  handleIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  LogoImage = (props: Image_v2Props) => {
    return (
      <div className={props.className} css={props.css}>
        <circle />
      </div>
    );
  };

  LogoImageStyled = styled(this.LogoImage)`
    place-items: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    div {
      ${BaseNoiz.styles.getCommonStyle("sixty")}
      border-radius: 100%;
      border: 0.05rem solid;
      background-color: transparent;
      border-radius: 100%;
    }
  `;

  Html = (props: Image_v2Props) => {
    const handleOnLoad = () => {
      console.log("loaded");

      this.handleIsLoading(false);
    };
    return (
      <div className={props.className} css={props.css}>
        <img
          onLoad={handleOnLoad}
          src={props.src}
          // alt="nft"
          id="image"
        ></img>
        <div id="test"></div>
        <div id="loading-waves-container">
          <div id="loading-waves">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  };

  LoadingAnimation = keyframes`
  0% {height:5px;transform:translateY(0px);background:#9b59b6;}
  25% {height:30px;transform:translateY(15px);background:#3498db;}
  50% {height:5px;transform:translateY(0px);background:#9b59b6;}
  100% {height:5px;transform:translateY(0px);background:#9b59b6;}
  `;
  // #25 aggiungere qui
  StyledHtml = styled(this.Html)`
    z-index: 1;
    overflow: hidden;
    grid-area: ${props => props.gridArea};
    background-color: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : "transparent"};
    //
    ${props => {
      if (props.borderTop)
        return `border-top: ${props.borderTop} solid;`;
    }}
    border-top: ${props =>
      props.fullBorder ? "1px" : undefined};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    /* #test {
  background-color: yellow;
  width: 100%;
  height: 100%;
  place-self: center;
  position:absolute
} */
    #image {
      border-image: none;
      display: ${() =>
        !this.state.isLoading ? "block" : "none"};
      max-width: ${props => props.image?.maxWidth};
      width: ${props => props.image?.width};
      height: ${props => props.image?.height};
      max-width: ${props =>
        props.maxWidth ? props.maxWidth : "100%"};
      display: ${props =>
        props.display ? props.display : "block"};
      height: ${props =>
        props.height ? props.height : "auto"};
      ${props => props.width && `width: ${props.width};`};
    }
    #loading-waves-container {
      place-self: center;
      grid-area: content;
      position: absolute;
      #loading-waves {
        place-self: center;
        display: ${() => {
          console.log("state", this.state.isLoading);

          return !this.state.isLoading ? "none" : "block";
        }};
        position: relative;
        span {
          display: block;
          bottom: 0px;
          width: 9px;
          height: 5px;
          background: #9b59b6;
          position: absolute;
          animation: ${this.LoadingAnimation} 1.5s infinite
            ease-in-out;
          animation-delay: 0.2s;
        }
        span:nth-child(2) {
          left: 11px;
          animation-delay: 0.3s;
        }
        span:nth-child(3) {
          left: 22px;
          animation-delay: 0.4s;
        }
        span:nth-child(4) {
          left: -11px;
          animation-delay: 0.1s;
        }
        span:nth-child(5) {
          left: -22px;
          animation-delay: 0s;
        }
      }
    }
  `;

  render() {
    let Element = this.makeElement();
    return <Element {...this.props}></Element>;
  }
}
