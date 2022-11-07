import {
  FC,
  FunctionComponent,
  FunctionComponentFactory,
  PropsWithChildren,
} from "react";
import {
  DefaultTheme as DefThem,
  css,
  CSSProperties,
} from "styled-components";
import { CardFormats } from "../style/Areas/Shape";
import {
  utility,
  BasicProps as BasPr,
} from "./global.types";
import { FluidTheme as ft } from "./types/theme";

export {};
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// HTML

type _AllHTMLAttributes<T> = allHTML<T>;

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// REACT

type _BasicComponentProps<P> = PropsWithChildren<P>;
type _FunctionComponentElement<P> =
  FunctionComponentElement<P>;
type _FunctionComponent = FunctionComponent;
type _BasicFC<P> = FC<BasicComponentProps<P>>;
type _BasicFCFactory<P> = FunctionComponentFactory<P>;

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// CSS

type _CssAttributeValueTypes =
  | string
  | number
  | (string & {})
  | (number & {})
  | undefined;

type _Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type _Dimensions = "width" | "height";

type width = number;
type height = number;

type BasicLayoutProps = {
  minHeight?: string;
};

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////// STYLED COMPONENTS

//////// PROPS

type _BooleanSizes = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type _BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

type _Sizes = "small" | "mid" | "big";

type _Size = { size: Sizes };

type _StyledDefault = {
  css?: string;
  className?: string;
};

type _BooleanDisplay = {
  display: boolean;
};

declare global {
  type MakeBooleansFromEnum<T> = {
    [props in keyof T]?: boolean;
  };
  type MakeBooleansFromUnion<T extends string> = {
    [props in T]?: boolean;
  };
  ///// HTML
  type AllHTMLAttributes<T> = _AllHTMLAttributes<T>;

  ///// React

  type BasicComponentProps<P> = _BasicComponentProps<P>;
  type FunctionComponentElement<P> =
    _FunctionComponentElement<P>;

  ///// CSS
  type CssProperties = keyof CSSProperties;
  type CssAttributeValueTypes = _CssAttributeValueTypes;
  type Position = _Position;
  type Dimensions = _Dimensions;

  ///// Styled
  type StyledDefault = _StyledDefault;
  type BasicFluidProps = _BasicProps;
  type Sizes = _Sizes;
  type Size = _Size;
  type BooleanSizes = _BooleanSizes;
  type BooleanDisplay = _BooleanDisplay;
  ///////// Themes
  type FluidTheme = ft;
}
