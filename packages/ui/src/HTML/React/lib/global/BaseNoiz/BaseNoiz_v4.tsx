import { styles } from "../../../style/common/CommonStyles";
import React, { Component } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { ReactNode } from "react";

interface DefaultProps_v4 {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  layout?: "some";
  style?: "some";
}

type BaseProps<T> = DefaultProps_v4 & T;

export type Multiplied_v4<T> = {
  datas?: BaseProps<T>[];
};

export type BuildProps_v4<T> = BaseProps<T>;

export type GComponent_v4<P> = (props: P) => JSX.Element;

export type StyledGComponent_v4<P> = StyledComponent<
  GComponent<P>,
  DefaultTheme,
  {},
  never
>;

export interface BaseNoiz_v4Props extends DefaultProps {}

export class BaseNoiz_v4Props {}

export interface BaseNoiz_v4<
  T = {},
  S = {},
  P = BuildProps<T>
> extends Component<P, S> {
  Html: GComponent<P>;
  StyledHtml: StyledGComponent<P>;
}

export class BaseNoiz_v4<
  T = {},
  S = {},
  P extends BuildProps<T> = BuildProps<T>
> extends Component<P, S> {
  static styles = styles;

  constructor(props: P) {
    super(props);
  }

  Html = (props: P): JSX.Element => (
    <div className={props.className}>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );

  setHtml(Html: (props: P) => JSX.Element) {
    this.Html = Html;
    return this;
  }

  StyledHtml: StyledGComponent<P> = styled(this.Html)``;

  setStyled(style: StyledGComponent<P>) {
    this.StyledHtml = style;
    return this;
  }

  SomeLayout = (props: P): JSX.Element => (
    <div className={props.className}>
      <p></p>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );
  SomeStyle = styled(this.Html)``;

  /**
   * function which chooses the layout of the Component that
   * will be rendered
   */
  chooseLayout(): GComponent<P> {
    if (this.props.layout === "some")
      this.setHtml(this.SomeLayout);
    return this.Html;
  }

  chooseStyle(): StyledGComponent<P> {
    if (this.props.style === "some")
      this.setStyled(this.SomeStyle);
    return this.StyledHtml;
  }

  render(): ReactNode {
    let Layout: GComponent<P> = this.chooseLayout();
    let Element: GComponent<P> = this.StyledHtml;
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    );
  }
}

declare global {
  var BaseNoiz: typeof BaseNoiz_v4;
  type BaseNoiz<P, S> = BaseNoiz_v4<P, S>;
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
  type BuildProps<T> = BuildProps_v4<T>;
  type DefaultProps = DefaultProps_v4;
  //
  type GComponent<T> = GComponent_v4<T>;
  type StyledGComponent<T> = StyledGComponent_v4<T>;
}

globalThis.BaseNoiz = BaseNoiz_v4;
globalThis.BaseNoizProps = BaseNoiz_v4Props;
