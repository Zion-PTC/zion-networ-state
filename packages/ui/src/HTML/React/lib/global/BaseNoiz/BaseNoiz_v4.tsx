import { styles } from "../../../style/common/CommonStyles";
import React, { Component } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { ReactNode } from "react";

//////// COMPONENTDECORATOR
////////

interface ComponentDecorator<
  L,
  S,
  P extends BaseNoizProps<L, S> = BaseNoizProps<L, S>
> {
  component: GComponent<P>;
  decorate(component: GComponent<P>): this;
  with(style: StyledGComponent<P>): StyledGComponent<P>;
}
class ComponentDecorator<
  L,
  S,
  P extends BaseNoizProps<L, S> = BaseNoizProps<L, S>
> {
  component: GComponent<P> = props => (
    <div className={props.className}></div>
  );
  constructor(component?: GComponent<P>) {
    if (component) this.component = component;
    this.decorate = function (component) {
      this.component = component;
      return this;
    };
    this.with = function (StyledComp) {
      const decorated = (props: P) => (
        <StyledComp
          as={this.component as StyledGComponent<P>}
          {...props}
        >
          {props.children}
        </StyledComp>
      );
      const Styled = styled(decorated)``;
      return Styled;
    };
  }
}

//////// LAYOUT
////////
interface BaseNoiz_v4Layout<L, P> {
  name: L;
  component: (p: P) => JSX.Element;
}
class BaseNoiz_v4Layout<L, P> {
  constructor(p?: BaseNoiz_v4Layout<L, P>) {
    if (!p) return;
    this.name = p.name;
    this.component = p.component;
  }
}
/////////// STYLEDLAYOUT
///////////
interface BaseNoiz_v4StyledLayout<S, P> {
  name: S;
  style: StyledGComponent<P>;
}
class BaseNoiz_v4StyledLayout<S, P> {
  constructor(props: BaseNoiz_v4StyledLayout<S, P>) {
    this.name = props.name;
    this.style = props.style;
  }
}
///////// UTILITY
/////////
interface DefaultProps_v4<LT = string, SLT = string> {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  layout?: LT;
  style?: SLT;
}

type BaseProps_v4<T> = DefaultProps_v4 & T;

export type Multiplied_v4<T> = {
  datas?: BaseProps_v4<T>[];
};

type GComponent_v4<P> = (props: P) => JSX.Element;

type StyledGComponent_v4<P> = StyledComponent<
  GComponent<P>,
  DefaultTheme,
  {},
  never
>;

////// PROPS
//////
export interface BaseNoiz_v4Props<L = string, S = string>
  extends DefaultProps<L, S> {}
export class BaseNoiz_v4Props<L, S> {}
////// STATE
//////
export interface BaseNoiz_v4State<P> {
  layout: GComponent<P>;
  style: StyledGComponent<P>;
}
export class BaseNoiz_v4State<P> {}
////// CLASS
//////
export interface BaseNoiz_v4<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v4Props<LT, SLT> = {},
  S extends BaseNoiz_v4State<P> = BaseNoiz_v4State<P>,
  L extends BaseNoiz_v4Layout<LT, P> = BaseNoiz_v4Layout<
    LT,
    P
  >,
  SL extends BaseNoiz_v4StyledLayout<
    SLT,
    P
  > = BaseNoiz_v4StyledLayout<SLT, P>
> extends Component<P, S> {}
export class BaseNoiz_v4<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v4Props<LT, SLT> = {},
  S extends BaseNoiz_v4State<P> = BaseNoiz_v4State<P>,
  L extends BaseNoiz_v4Layout<LT, P> = BaseNoiz_v4Layout<
    LT,
    P
  >,
  SL extends BaseNoiz_v4StyledLayout<
    SLT,
    P
  > = BaseNoiz_v4StyledLayout<SLT, P>
> extends Component<P, S> {
  static styles = styles;

  ComponentDecorator = ComponentDecorator<LT, SLT, P>;

  Layout = BaseNoiz_v4Layout<LT, P>;

  Style = BaseNoiz_v4StyledLayout<SLT, P>;

  layouts: L[] = [];

  styledlayouts: SL[] = [];

  #Html: GComponent<P> = (props: P): JSX.Element => (
    <div className={props.className}>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );
  get Html(): GComponent<P> {
    return this.#Html;
  }
  set Html(Html: GComponent<P>) {
    this.#Html = Html;
  }

  #StyledHtml: StyledGComponent<P> = styled(this.Html)``;
  get StyledHtml() {
    return this.#StyledHtml;
  }
  set StyledHtml(style: StyledGComponent<P>) {
    this.#StyledHtml = style;
  }

  constructor(props: P) {
    super(props);
  }

  setLayout(Layout: GComponent<P>) {
    this.setState({ layout: Layout });
  }

  filterLayout(layout: L) {
    const setLayout = this.setLayout.bind(this);
    if (this.props.layout === layout.name) {
      setLayout(layout.component);
    }
  }
  /**
   * function which chooses the layout of the Component that
   * will be rendered
   */
  chooseLayout(): GComponent<P> {
    if (this.layouts) {
      this.layouts.forEach(this.filterLayout.bind(this));
    }
    return this.Html;
  }

  setStyle(Style: StyledGComponent<P>) {
    const currentLayout = this.state.layout;
    const decorator = new this.ComponentDecorator(
      currentLayout
    );

    const decorate = decorator.decorate.bind(decorator);
    const DecoStyle = decorate(currentLayout).with(Style);
    this.setState({ style: DecoStyle });
  }

  filterStyle(style: SL) {
    if (this.props.style === style.name) {
      this.setStyle(style.style);
    }
  }
  /**
   * function which chooses the layout of the Component that
   * will be rendered
   */
  chooseStyle(): StyledGComponent<P> {
    const filter = this.filterStyle;
    this.styledlayouts.forEach(filter.bind(this));
    return this.StyledHtml;
  }

  render(): ReactNode {
    let Layout: GComponent<P> = this.state.layout;
    let Style = this.state.style;

    Layout = Style;
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    );
  }
  componentDidMount(): void {
    this.chooseLayout();
  }
  componentDidUpdate(
    _: Readonly<P>,
    prevState: Readonly<S>,
    __?: any
  ): void {
    if (this.layouts.length === 0) return;
    if (this.styledlayouts.length === 0) return;
    const cond = prevState.layout !== this.state.layout;

    cond && this.chooseStyle();
  }
}

declare global {
  // layout
  var BaseNoizLayout: typeof BaseNoiz_v4Layout;
  type BaseNoizLayout<L, P> = BaseNoiz_v4Layout<L, P>;
  // styles
  var BaseNoizStyledLayout: typeof BaseNoiz_v4StyledLayout;
  type BaseNoizStyledLayout<S, P> =
    BaseNoiz_v4StyledLayout<S, P>;
  // class
  var BaseNoiz: typeof BaseNoiz_v4;
  type BaseNoiz<
    LT extends string,
    SLT extends string,
    P extends DefaultProps<LT, SLT>,
    S extends BaseNoiz_v4State<P>,
    L extends BaseNoiz_v4Layout<LT, P> = BaseNoiz_v4Layout<
      LT,
      P
    >,
    SL extends BaseNoiz_v4StyledLayout<
      SLT,
      P
    > = BaseNoiz_v4StyledLayout<SLT, P>
  > = BaseNoiz_v4<LT, SLT, P, S, L, SL>;
  // props
  var BaseNoizProps: typeof BaseNoiz_v4Props;
  /**
   * Usage:
   * ```tsx
   * import React from "react";
   *
   * import {
   *   BaseNoiz,
   *   BaseNoizProps,
   * } from "../../HTML/React/lib/global";
   *
   *
   * interface NuProps extends BaseNoizProps {
   *   name: string;
   * }
   * class NuProps extends BaseNoizProps {}
   *
   * interface NuState extends BaseNoizState {}
   * class NuState extends BaseNoizeState {}
   *
   * interface Nu extends BaseNoiz<
   *   NuProps,
   *   NuState
   * > {}
   * class Nu extends BaseNoiz<
   *   NuProps,
   *   NuState
   * > {}
   *
   * const child1 = new NuProps();
   * child1.name = "1"
   * child2.children = <div>I'm child 1</div>
   *
   * const child2 = new NuProps();
   * child2.name = "2"
   * child2.children = ["ciao2", "asdas"]
   *
   * const child3 = new NuProps();
   * child3.name = "3"
   * child3.children = ["ciao3", "asdas"]
   *
   * const child4 = new NuProps();
   * child4.name = "4"
   * child4.children = ["ciao4", "asdas"]
   *
   * const props = new NuProps();
   * props.name = "ciao"
   * props.datas = [child1, child2, child3, child4]
   *
   * export default function index() {
   *   return <Nu {...props}>cioooo</Nu>;
   * }
   * ```
   */
  type BaseNoizProps<LT, SLT> = BaseNoiz_v4Props<LT, SLT>;
  // state
  var BaseNoizState: typeof BaseNoiz_v4State;
  type BaseNoizState<P> = BaseNoiz_v4State<P>;
  //
  type BaseProps<T> = BaseProps_v4<T>;
  type DefaultProps<LT, SLT> = DefaultProps_v4<LT, SLT>;
  //
  type GComponent<T> = GComponent_v4<T>;
  type StyledGComponent<T> = StyledGComponent_v4<T>;
}

globalThis.BaseNoiz = BaseNoiz_v4;
globalThis.BaseNoizProps = BaseNoiz_v4Props;
globalThis.BaseNoizState = BaseNoiz_v4State;
globalThis.BaseNoizLayout = BaseNoiz_v4Layout;
globalThis.BaseNoizStyledLayout = BaseNoiz_v4StyledLayout;
