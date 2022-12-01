import { styles } from "../../../style/common/CommonStyles";
import React, { Component } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { ReactNode } from "react";
import { dataGuard } from "@zionstate/utils";

type BaseProps<T, B = boolean> = {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  multiply?: B;
} & T;

export type Multiplied_v3<T> = BaseProps<T> & {
  datas?: BaseProps<T>[];
};

export type BuildProps_v3<T> = BaseProps<T> & {
  datas?: BaseProps<T>[];
};

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
 *   BaseNoiz_v3,
 *   BuildProps,
 *   BaseNoiz_v3Props,
 * } from "../../HTML/React/lib/global";
 *
 * interface NuPropsType {
 *   name: string;
 * }
 *
 * interface NuProps
 *   extends BuildProps<NuPropsType>,
 *     BaseNoiz_v3Props {}
 *
 * class NuProps extends BaseNoiz_v3Props {
 *   constructor(props: BuildProps<NuPropsType>) {
 *     super(props);
 *     this.name = props.name;
 *     this.datas = props.datas;
 *   }
 * }
 *
 * class Nu extends BaseNoiz_v3<
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
export interface BaseNoiz_v3Props extends BaseProps<{}> {}

export class BaseNoiz_v3Props {
  constructor(props: BaseNoiz_v3Props) {
    this.children = props.children;
    this.className = props.className;
    this.css = props.css;
    this.key = props.key;
    this.multiply = props.multiply;
  }
}

export interface BaseNoiz_v3<
  T = {},
  S = {},
  P = BuildProps<T>
> extends Component<P, S> {
  Html: GComponent<P>;
  StyledHtml: StyledGComponent<P>;
}

export class BaseNoiz_v3<
  T = {},
  S = {},
  P extends BuildProps<T> = BuildProps<T>
> extends Component<P, S> {
  static styles = styles;

  constructor(props: P) {
    super(props);
  }

  multiplier(
    Component: (props: BaseProps<T>) => JSX.Element,
    datas: P["datas"]
  ): GComponent<P> {
    return (props: P) => (
      <div className={props.className}>
        {dataGuard(datas, "").map((data, id) => (
          <Component key={id} {...data}></Component>
        ))}
        {props.children}
      </div>
    );
  }

  Html = (props: P) => (
    <div className={props.className}>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );

  StyledHtml = styled(this.Html)``;

  makeElement() {
    let Element: GComponent<P> = this.StyledHtml;

    if (this.props.multiply) {
      if (!this.props.datas) throw new Error("no datas");
      const datas = this.props.datas;
      Element = this.multiplier(this.StyledHtml, datas);
    }
    return Element;
  }

  Element: GComponent<P> = this.makeElement();

  render(): ReactNode {
    let Element: GComponent<P> = this.Element;

    return (
      <Element {...this.props}>
        {this.props.children}
      </Element>
    );
  }
}

declare global {
  var BaseNoiz: typeof BaseNoiz_v3;
  type BaseNoiz<P, S> = BaseNoiz_v3<P, S>;
  var BaseNoizProps: typeof BaseNoiz_v3Props;
  type BaseNoizProps = BaseNoiz_v3Props;
  type BuildProps<T> = BuildProps_v3<T>;
}

globalThis.BaseNoiz = BaseNoiz_v3;
globalThis.BaseNoizProps = BaseNoiz_v3Props;
