import {
  AllHTMLAttributes as allHTML,
  CSSProperties as CSS,
  ClassicElement as CE,
  FunctionComponent as FuncComp,
  FC,
  FunctionComponentElement as FCE,
  FunctionComponentFactory,
  PropsWithChildren,
} from "react";
import { Interpolation, ThemedStyledProps } from "styled-components";

/**
 * Useful link: https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
 */
/// REACT
export type BasicComponentProps<P> = PropsWithChildren<P>;
export type BasicFC<P> = FC<BasicComponentProps<P>>;
export type BasicFCFactory<P> = FunctionComponentFactory<P>;
/// CSS
export type Dimensions = "width" | "height";
export type Sizes = "small" | "mid" | "big";
export type Size = { size: Sizes };
export type CSSProps = { css_: utility.ZionCss };
export type Css_ = { css_?: CSS };
export type Css_v0 = { [prop in keyof CSS]?: CssAttributeValueTypes };

export type BooleanSizes = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type CssAttributeValueTypes =
  | string
  | number
  | (string & {})
  | (number & {})
  | undefined;

export type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type CssKeysFromStringArray<T extends (keyof CSS)[]> = {
  [props in T[number]]: CSS[props];
};

export type BasicFluidThemedStyledProps = Interpolation<
  ThemedStyledProps<Css_, any>
>;

export type FluidThemed<Props> = BasicFluidThemedStyledProps & Props;

export type CssPropertiesKeys = keyof CSS;

// This is just to collect some types that I find useful for
// the creation of components in the Library.
export namespace utility {
  export type FunctionComponent = FuncComp;
  export type FunctionComponentElement<P> = FCE<P>;
  export type AllHTMLAttributes<T> = allHTML<T>;
  export type CSSProperties = CSS;
  export type ClassicElement<P> = CE<P>;
  export type PickCss<P extends keyof CSS> = Pick<CSS, P>;
  export type OmitCss<O extends keyof CSS> = Omit<CSS, O>;
  export type RequiredCss<R extends keyof CSS> = Required<PickCss<R>>;
  /**
   * Utility type to build css property requierements. The
   * CssProperties type is built with all properties being
   * optional.
   * Sometimes we need some properties to be required,
   * in this case we can use this utility type which has an
   * optional generic type which extends the keys of
   * CssProperties in order to create union types of
   * required CssProperties.
   * Usage:
   * ```ts
   * // creates an object type which has width and height as required props
   * type CssProps = ZionCss<"width" | "height">;
   * // creates a type which has only the required properties
   * type CssProps = ZionCss<"width"|"height",true>
   * // creates a type which has the required properties AND the list passed as Optional
   * type CssProps = ZionCss<"width"|"height",true,"maxWidth">
   * // creates a type which has only optional properties passed as Optional
   * type CssProps = ZionCss<undefined,true,"display" | "maxWidth">
   * ```
   * @param R the list of required CSS attributes
   * @param Pick if true, the list of values
   * passed is also picked, meaning that only those values
   * will be retained from all of the CSS attributes.
   * @param Optional list of attributes that shall be
   * included but optionally.
   */
  export type ZionCss<
    R extends keyof CSS | undefined = undefined,
    Pick = false,
    Optional extends keyof CSS | undefined = undefined
  > = [R] extends [keyof CSS]
    ? Pick extends false
      ? RequiredCss<R> & OmitCss<R>
      : Optional extends undefined
      ? RequiredCss<R>
      : [Optional] extends [keyof CSS]
      ? RequiredCss<R> & PickCss<Optional>
      : never
    : Pick extends true
    ? [Optional] extends [keyof CSS]
      ? PickCss<Optional>
      : never
    : CSS;
  export type CssPropUnion<T extends keyof CSSProperties | undefined> =
    utility.ZionCss<undefined, true, T>;
}
