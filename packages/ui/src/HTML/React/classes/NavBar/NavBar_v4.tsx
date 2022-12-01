import styled, { css } from "styled-components";
import { BooleanizeUnions } from "../../lib/utility";
import { NavInput, NavInputProps } from "./NavInput";

export type Direction = BooleanizeUnions<
  "horizontal" | "vertical"
>;

export type NavBarType = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

export interface NavBar_v4PropsType
  extends Direction,
    NavBarType {
  datas: NavInputProps[];
}

export interface NavBar_v4Props
  extends BuildProps<NavBar_v4PropsType>,
    BaseNoizProps {}

export class NavBar_v4Props extends BaseNoizProps {
  constructor(props: BuildProps<NavBar_v4PropsType>) {
    super(props);
    this.datas = props.datas;
  }
}
export interface NavBar_v4State {}

export interface NavBar_v4
  extends BaseNoiz<NavBar_v4Props, NavBar_v4State> {}

export class NavBar_v4 extends BaseNoiz<
  NavBar_v4Props,
  NavBar_v4State
> {
  TextNavBar = (props: NavBar_v4Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          textInput
          multiply
          datas={props.datas}
          inputId=""
          inputName=""
          IconComponent={() => <></>}
        ></NavInput>
      </nav>
    );
  };

  KeyValueNavBar = (props: NavBar_v4Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          keyValueInput
          multiply
          datas={props.datas}
          inputId=""
          inputName=""
          IconComponent={() => <></>}
        ></NavInput>
      </nav>
    );
  };

  IconNavBar = (props: NavBar_v4Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          iconInput
          multiply
          datas={props.datas}
          inputId=""
          inputName=""
          IconComponent={() => <></>}
        ></NavInput>
      </nav>
    );
  };

  mapperBuilder() {
    const props = this.props;
    const TextNavBar = this.TextNavBar;
    const KeyValueNavBar = this.KeyValueNavBar;
    const IconNavBar = this.IconNavBar;
    let html = styled(this.Html)``;
    if (props.text)
      html = styled(TextNavBar)`
        ${this.Style1}
      `;
    if (props["key-value"])
      html = styled(KeyValueNavBar)`
        ${this.Style1}
      `;
    if (props.icon)
      html = styled(IconNavBar)`
        ${this.Style1}
      `;
    return html;
  }
  Html = (props: NavBar_v4Props) => {
    return <h1>{props.children}</h1>;
  };
  Style1 = css<typeof this.props>`
    display: grid;
    grid-auto-flow: ${props => {
      if (props.horizontal === true) {
        return "column";
      }
      if (props.vertical === true) {
        return "row";
      }
      return "column";
    }};
    input {
      display: none;
    }
    label {
      cursor: pointer;
      background-color: #7c808316;
      border-top: 0.05rem solid
        ${props => props.theme.primary.borderColor};
      font-size: 70%;
      display: grid;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      place-content: center;
      &:hover {
        background-color: #b0b3b520;
      }
      div {
        display: ${props => {
          if (props.text === true) return "grid";
          if (props.icon === true) return "grid";
          if (props["key-value"] === true) return "inline";
        }};
        place-items: center;
        p {
          display: inline;
        }
        p:first-child {
          margin-right: 0.3rem;
        }
      }
      ${props =>
        props.icon === true &&
        css`
          div {
            display: grid;
            place-items: center;
          }
        `}
    }
    input:checked + label {
      border-top: 0.1rem solid
        ${props => props.theme.primary.borderColor};
      border-bottom: 2px solid
        ${props => props.theme.secondary.borderColor};
      background-color: ${props =>
        props.theme.primary.backgroundColor};
    }
  `;

  StyledHtml2 = this.mapperBuilder();

  render() {
    let Element = this.makeElement();
    return <Element {...this.props}></Element>;
  }
}
