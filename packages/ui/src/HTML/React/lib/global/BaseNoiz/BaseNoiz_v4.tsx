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
}

type BaseProps<T, B = boolean> = {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  multiply?: B;
} & T;

export type Multiplied_v4<T> = {
  datas?: BaseProps<T>[];
};

export type BuildProps_v4<T> = BaseProps<T>;

export type GComponent<P> = (props: P) => JSX.Element;

export type StyledGComponent<P> = StyledComponent<
  GComponent<P>,
  DefaultTheme,
  {},
  never
>;

/**
 * Usage:
 * ```tsx
 * import React from "react";
 *
 * import {
 *   BaseNoiz_v4,
 *   BuildProps,
 *   BaseNoiz_v4Props,
 * } from "../../HTML/React/lib/global";
 *
 * interface NuPropsType {
 *   name: string;
 * }
 *
 * interface NuProps
 *   extends BuildProps<NuPropsType>,
 *     BaseNoiz_v4Props {}
 *
 * class NuProps extends BaseNoiz_v4Props {
 *   constructor(props: BuildProps<NuPropsType>) {
 *     super(props);
 *     this.name = props.name;
 *     this.datas = props.datas;
 *   }
 * }
 *
 * class Nu extends BaseNoiz_v4<
 *   BuildProps<{ name: string }>
 * > {}
 *
 * const child1 = new NuProps({
 *   name: "1",
 *   children: <div>bullshit</div>,
 * });
 *
 * const child2 = new NuProps({
 *   name: "2",
 *   children: ["ciao2", "asdas"],
 * });
 *
 * const child3 = new NuProps({
 *   name: "3",
 *   children: { name: "strio" }.name,
 * });
 *
 * const child4 = new NuProps({
 *   name: "3",
 *   children: "ciao4",
 * });
 *
 * const props = new NuProps({
 *   name: "ciao",
 *   multiply: true,
 *   datas: [child1, child2, child3, child4],
 * });
 *
 * export default function index() {
 *   return <Nu {...props}>cioooo</Nu>;
 * }
 * ```
 */
export interface BaseNoiz_v4Props extends DefaultProps {}

export class BaseNoiz_v4Props {
  constructor(props: BaseNoiz_v4Props) {
    this.children = props.children;
    this.className = props.className;
    this.css = props.css;
    this.key = props.key;
  }
}

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

  Html = (props: P) => (
    <div className={props.className}>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );

  StyledHtml = styled(this.Html)``;

  render(): ReactNode {
    let Element: GComponent<P> = this.StyledHtml;

    return (
      <Element {...this.props}>
        {this.props.children}
      </Element>
    );
  }
}

declare global {
  var BaseNoiz: typeof BaseNoiz_v4;
  type BaseNoiz<P, S> = BaseNoiz_v4<P, S>;
  var BaseNoizProps: typeof BaseNoiz_v4Props;
  type BaseNoizProps = BaseNoiz_v4Props;
  //
  type BuildProps<T> = BuildProps_v4<T>;
  type DefaultProps = DefaultProps_v4;
}

globalThis.BaseNoiz = BaseNoiz_v4;
globalThis.BaseNoizProps = BaseNoiz_v4Props;
