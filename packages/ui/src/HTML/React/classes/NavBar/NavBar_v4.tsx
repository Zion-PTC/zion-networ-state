import { ComponentClass } from "react";
import styled, { css } from "styled-components";
import { StyledDefault } from "../../lib/types/utility";
import { BooleanizeUnions } from "../../lib/utility";
import {
  NavInput,
  NavInputProps,
  NavInputState,
} from "./NavInput";

export type Direction = BooleanizeUnions<
  "horizontal" | "vertical"
>;

export type NavBarType = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

enum NavBar_v4Layouts {
  main = "main",
  tropical = "tropical",
}
type NavBar_v4LayoutTypes = keyof typeof NavBar_v4Layouts;

enum NavBar_v4Styles {
  borderOnTop = "borderOnTop",
  nostyle = "nostyle",
}
type NavBar_v2StyleTypes = keyof typeof NavBar_v4Styles;

export interface NavBar_v4Props
  extends Direction,
    NavBarType,
    BaseNoizProps {
  inputs?: NavInputProps[];
  layout?: NavBar_v4LayoutTypes;
  styles?: NavBar_v2StyleTypes;
}
export class NavBar_v4Props extends BaseNoizProps {}

export interface NavBar_v4State {
  inputs: NavInputProps[];
}
export class NavBar_v4State {}

class NavBarLayout extends BaseNoizLayout<
  NavBar_v4LayoutTypes,
  NavBar_v4Props
> {}
const main = new NavBarLayout();
main.name = NavBar_v4Layouts.main;
main.component = (props: NavBar_v4Props) => {
  return (
    <nav className={props.className}>
      {props.children}asd
    </nav>
  );
};
const tropical = new NavBarLayout();
tropical.name = NavBar_v4Layouts.tropical;
tropical.component = (props: NavBar_v4Props) => {
  return (
    <nav className={props.className}>
      <p>tropical</p>
      {props.children}
    </nav>
  );
};

class NavBar_v4StyledLayout extends BaseNoizStyledLayout<
  NavBar_v2StyleTypes,
  NavBar_v4Props
> {}

export interface NavBar_v4
  extends BaseNoiz<
    NavBar_v4Props,
    NavBar_v4State,
    NavBarLayout,
    NavBar_v4StyledLayout
  > {
  NavInput: ComponentClass<
    StyledDefault<{
      inputId: string;
      inputName: string;
      IconComponent?: () => JSX.Element;
      value?: string;
      checked?: boolean;
      iconInput?: boolean;
      keyValueInput?: boolean;
      textInput?: boolean;
    }>,
    NavInputState
  >;
}
export class NavBar_v4 extends BaseNoiz<
  NavBar_v4Props,
  NavBar_v4State,
  NavBarLayout,
  NavBar_v4StyledLayout
> {
  layouts: NavBarLayout[] = [main, tropical];

  BorderOnTop = styled(this.chooseLayout())`
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

  noStyle = styled(this.chooseLayout())``;

  styledlayouts: NavBar_v4StyledLayout[] = [
    new NavBar_v4StyledLayout({
      name: "borderOnTop",
      style: this.BorderOnTop,
    }),
    new NavBar_v4StyledLayout({
      name: "nostyle",
      style: this.noStyle,
    }),
  ];

  NavInput: ComponentClass<
    StyledDefault<{
      inputId: string;
      inputName: string;
      IconComponent?: () => JSX.Element;
      value?: string;
      checked?: boolean;
      iconInput?: boolean;
      keyValueInput?: boolean;
      textInput?: boolean;
    }>,
    NavInputState
  > = NavInput;

  constructor(props: NavBar_v4Props) {
    super(props);
    let state = new NavBar_v4State();
    if (this.props.inputs)
      state.inputs = this.props.inputs;
    this.state = state;
  }

  defineType(data: NavInputProps) {
    if (this.props.text) data.textInput = true;
    if (this.props.icon) data.iconInput = true;
    if (this.props["key-value"]) data.keyValueInput = true;
    else data.textInput = true;
    return data;
  }

  mapNavInputs = (data: NavInputProps, idx: number) => {
    data = this.defineType(data);
    return <NavInput {...data} key={idx} />;
  };

  mappedNavInputs = (inputs: NavInputProps[]) => (
    <>{inputs.map(this.mapNavInputs)}</>
  );

  checkInputs() {
    const inputs = this.state.inputs;
    if (!inputs)
      if (!this.props.children) return <>nothing</>;
      else {
        return <></>;
      }
    else return this.mappedNavInputs(inputs);
  }

  render() {
    const Inputs = this.checkInputs();
    let Style = this.BorderOnTop;
    const Res = this.chooseStyle();
    Style = Res;

    return (
      <Style {...this.props}>
        {Inputs}
        {this.props.children}
      </Style>
    );
  }
}
