import { styles } from "../../../style/common/CommonStyles";
import React, { Component } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { ReactNode } from "react";

interface BaseNoiz_v4Layout<L, P> {
  name: L;
  component: (p: P) => JSX.Element;
}
class BaseNoiz_v4Layout<L, P> {}
/////////
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
/////////
///////

interface DefaultProps_v4 {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  layout?: string;
  style?: string;
}

type BaseProps_v4<T> = DefaultProps_v4 & T;

type Multiplied_v4<T> = {
  datas?: BaseProps_v4<T>[];
};

type GComponent_v4<P> = (props: P) => JSX.Element;

type StyledGComponent_v4<P> = StyledComponent<
  GComponent<P>,
  DefaultTheme,
  {},
  never
>;

export interface BaseNoiz_v4Props extends DefaultProps {}
export class BaseNoiz_v4Props {}

export interface BaseNoiz_v4<
  P extends DefaultProps = {},
  S = {},
  L extends BaseNoiz_v4Layout<any, P> = BaseNoiz_v4Layout<
    any,
    P
  >,
  SL extends BaseNoiz_v4StyledLayout<
    any,
    P
  > = BaseNoiz_v4StyledLayout<any, P>
> extends Component<P, S> {}
export class BaseNoiz_v4<
  P extends DefaultProps = {},
  S = {},
  L extends BaseNoiz_v4Layout<any, P> = BaseNoiz_v4Layout<
    any,
    P
  >,
  SL extends BaseNoiz_v4StyledLayout<
    any,
    P
  > = BaseNoiz_v4StyledLayout<any, P>
> extends Component<P, S> {
  static styles = styles;

  layouts: L[] = [];

  styledlayouts: SL[] = [];

  #Html: GComponent<P> = (props: P): JSX.Element => (
    <div className={props.className}>
      BaseNoiz
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

  filterLayout(layout: L) {
    if (this.props.layout === layout.name) {
      this.Html = layout.component;
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

  filterStyle(style: SL) {
    if (this.props.style === style.name) {
      this.StyledHtml = style.style;
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
    let Layout: GComponent<P> = this.chooseLayout();
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    );
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
    P extends DefaultProps,
    S,
    L extends BaseNoiz_v4Layout<
      any,
      P
    > = BaseNoiz_v4Layout<any, P>,
    SL extends BaseNoiz_v4StyledLayout<
      any,
      P
    > = BaseNoiz_v4StyledLayout<any, P>
  > = BaseNoiz_v4<P, S, L, SL>;
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
  type BaseNoizProps = BaseNoiz_v4Props;
  //
  type BaseProps<T> = BaseProps_v4<T>;
  type DefaultProps = DefaultProps_v4;
  //
  type GComponent<T> = GComponent_v4<T>;
  type StyledGComponent<T> = StyledGComponent_v4<T>;
}

globalThis.BaseNoiz = BaseNoiz_v4;
globalThis.BaseNoizProps = BaseNoiz_v4Props;
globalThis.BaseNoizLayout = BaseNoiz_v4Layout;
globalThis.BaseNoizStyledLayout = BaseNoiz_v4StyledLayout;
