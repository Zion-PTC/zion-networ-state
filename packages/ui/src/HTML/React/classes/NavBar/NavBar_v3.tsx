import styled, { css } from "styled-components";
import { BaseNoiz_v2 } from "../../lib/global/BaseNoiz/BaseNoiz_v2";
import { NavInput, NavInputAsChild } from "./NavInput";

///// TYPES
export type NavBar_v3Data = utility.Flatten<
  NavBarType & Direction & NavInputAsChild
>;

export type NavBar_v3Booleans = {};

export type NavBar_v3Props = NoizProps<
  NavBar_v3Data & NavBar_v3Booleans
>;

export type NavBar_v3ClassBooleans = utility.Flatten<
  NavBarType & Direction
>;

export type NavBar_v3ClassProps =
  NoizDatas<NavBar_v3Props> & NavBar_v3ClassBooleans;

export type NavBar_v3AsChild = MakeAsChild<
  "NavBar",
  NavBar_v3ClassProps
>;
////////////

export const NavBar_v3 = class extends BaseNoiz<
  NavBar_v3Data,
  NavBar_v3ClassBooleans
> {
  constructor(props: NavBar_v3ClassProps) {
    super(props);
  }

  TextNavBar = (props: NavBar_v3Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          datas={props.NavInput}
          textInput
        ></NavInput>
      </nav>
    );
  };

  KeyValueNavBar = (props: NavBar_v3Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          datas={props.NavInput}
          keyValueInput
        ></NavInput>
      </nav>
    );
  };

  IconNavBar = (props: NavBar_v3Props) => {
    return (
      <nav className={props.className}>
        <NavInput
          datas={props.NavInput}
          iconInput
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

  Style = this.mapperBuilder();

  Mapper = BaseNoiz_v2.mapperFactory(this.Style);

  render() {
    return (
      <this.Mapper datas={this.props.datas}></this.Mapper>
    );
  }
};
