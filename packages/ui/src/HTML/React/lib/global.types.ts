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
import {
  DefaultTheme,
  Interpolation,
  StyledComponent,
  ThemedStyledProps,
} from "styled-components";
import { FluidTheme as FluTh } from "./types/theme";

///// Deprecated
export type BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type width = number;
export type height = number;

export type BasicLayoutProps = {
  minHeight?: string;
};
export namespace utility {
  export type ClassicElement<P> = CE<P>;

  export type PickCss<P extends keyof CSS> = Pick<CSS, P>;

  export type OmitCss<O extends keyof CSS> = Omit<CSS, O>;

  export type RequiredCss<R extends keyof CSS> = Required<
    PickCss<R>
  >;
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
  export type CssPropUnion<
    T extends keyof CSSProperties | undefined
  > = utility.ZionCss<undefined, true, T>;

  /**
   *
   */
  export type CssKeysFromStringArray<
    T extends (keyof CSS)[]
  > = {
    [props in T[number]]: CSS[props];
  };

  /**
   *
   */

  export type EnumToUnion<T> = keyof T;
}

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// REACT
export type BasicComponentProps<P> = PropsWithChildren<P>;
export type FunctionComponentElement<P> = FCE<P>;
export type FunctionComponent = FuncComp;
export type BasicFC<P> = FC<BasicComponentProps<P>>;
export type BasicFCFactory<P> =
  FunctionComponentFactory<P>;

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// CHTML

export type AllHTMLAttributes<T> = allHTML<T>;

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// CSS
export type CSSProperties = CSS;

export type Dimensions = "width" | "height";

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

export type CssPropertiesKeys = keyof CSS;

// This is just to collect some types that I find useful for
// the creation of components in the Library.

////// UTILITY

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////// STYLED COMPONENTS

//////// PROPS

export type BooleanDisplay = {
  display: boolean;
};

export type BooleanSizes = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type Sizes = "small" | "mid" | "big";

export type Size = { size: Sizes };

export type StyledDefault = {
  css?: string;
  className?: string;
};

//////// TYPES
export type LoadingIconType = StyledComponent<
  "div",
  DefaultTheme,
  BooleanDisplay,
  never
>;

//////// THEMES
export type FluidTheme = FluTh;

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
/////////////////FLUID

export type CSSProps = { css?: CSS };

export type CssStyled = { css_?: CSS };

export type GCssStyled<A extends keyof CSS> = {
  css_?: utility.ZionCss<undefined, true, A>;
};

export type GFluidStyled<A extends keyof CSS> =
  StyledDefault & GCssStyled<A>;

export type FluidStyled = StyledDefault & CssStyled;

export type BasicFluidThemedStyledProps = Interpolation<
  ThemedStyledProps<CssStyled, any>
>;

export type FluidThemed<Props> =
  BasicFluidThemedStyledProps & Props;
