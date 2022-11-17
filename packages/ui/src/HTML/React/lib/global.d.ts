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
  CSSProp,
  CSSObject,
  DefaultTheme,
} from "styled-components";
import { CardFormats } from "../style/Areas/Shape";
import { BasicProps as BasPr } from "./global.types";
import {
  NoizProps as NP,
  MakeAsChild as MAC,
  NoisDatas as ND,
} from "./types";
import { FluidTheme as ft } from "./types/theme";

export {};
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// HTML

type Flatten<T> = utility.Flatten<T>;

type datas = { name: string } | { surname: string };

type Test<T> = {
  datas: (T extends {}
    ? { [k in keyof T]: T[k] }
    : never)[];
  tall?: boolean;
};
type ResTest = Test<datas>;

type _AllHTMLAttributes<T> = allHTML<T>;

type _InputValue =
  | string
  | number
  | readonly string[]
  | undefined;

type _InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

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

type FlattenInterface<Type> = {
  [Property in keyof Type]: Type[Property];
};

type obj = CSSObject;
type _FlattenedCSSObject = FlattenInterface<CSSObject>;

type CssPropWithDefaultTheme = CSSProp<DefaultTheme>;

/// TEST JSX instrinsic
type _FlattenedInstrinsicAttributes =
  FlattenInterface<JSX.IntrinsicAttributes>;

/**
 * Props with JSX Instrinsic Attributes
 */
type _PropsWithJsxInstrinsicAttr<T> =
  JSX.IntrinsicAttributes & T;

// /**
//  * Adds StyledDefault {css:.., className:...}
//  */
// type _NoizProps<
//   T = any,
//   hasChildren extends boolean = false
// > = hasChildren extends false
//   ? _StyledDefault<T>
//   : Flatten<PropsWithChildren<_StyledDefault<T>>>;

// type _NoizDatas<Data, Boolean> = _NoizProps<
//   Flatten<
//     {
//       datas: (Data extends {}
//         ? { [k in keyof Data]: Data[k] }
//         : never)[];
//       type?: Boolean;
//     } & Boolean
//   >,
//   true
// >;

// type _ChildDatas<Data> = {
//   datas: (Data extends {}
//     ? { [k in keyof Data]: Data[k] }
//     : never)[];
// };

// type _MakeChildDatas<Data extends { dataId: string }> = {
//   [k in Data["dataId"]]: {
//     datas: (Data extends {}
//       ? { [k in keyof Data] }
//       : Data[k])[];
//   };
// };

// type _MakeChildDatas_v2<
//   DataId extends string,
//   Props extends { datas: any }
// > = {
//   [k in DataId]: { datas: Props["datas"] };
// };

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

type _Direction = utility.BooleanizeUnions<
  "horizontal" | "vertical"
>;

type _NavBarType = utility.BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

type width = number;
type height = number;

type _BasicLayoutProps = {
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

type _BooleanDisplay = {
  display: boolean;
};

type _Sizes = "small" | "mid" | "big";

type _Size = { size: Sizes };

type _StyledDefault<T> = Flatten<
  T & {
    css?: string;
    className?: string;
  }
>;

declare global {
  type MakeBooleansFromEnum<T> = {
    [props in keyof T]?: boolean;
  };
  type MakeBooleansFromUnion<T extends string> = {
    [props in T]?: boolean;
  };
  ///// HTML
  type AllHTMLAttributes<T> = _AllHTMLAttributes<T>;
  type InputValue = _InputValue;
  type InputType = _InputType;

  ///// React

  type BasicComponentProps<P> = _BasicComponentProps<P>;
  type FunctionComponentElement<P> =
    _FunctionComponentElement<P>;

  ///// CSS
  type CssProperties = keyof CSSProperties;
  type CssAttributeValueTypes = _CssAttributeValueTypes;
  type Position = _Position;
  type Dimensions = _Dimensions;
  type BasicLayoutProps = _BasicLayoutProps;
  type PropsWithJsxInstrinsicAttr<T> =
    _PropsWithJsxInstrinsicAttr<T>;
  type Direction = _Direction;
  type NavBarType = _NavBarType;

  ///// Styled
  type StyledDefault<T> = _StyledDefault<T>;
  type BasicFluidProps = _BasicProps;
  type Sizes = _Sizes;
  type Size = _Size;
  type BooleanSizes = _BooleanSizes;
  type BooleanDisplay = _BooleanDisplay;

  ///////// Themes
  type FluidTheme = ft;
  type NoizProps<T, B extends boolean = true> = NP<T, B>;

  /**
   * Standard React Component (class or function) props.
   *
   * usage:
   *
   * ```ts
   * type Data = {name:string}
   *
   * type Booleans = {
   *   small?: boolean;
   *   exortic?: boolean;
   * }
   *
   * type ElementProps = NoizDatas<
   *   Data,
   *   Booleans
   * >
   * ```
   *
   * This code renders a type which looks like this:
   * ```ts
   *
   * type Result = {
   *   datas: {name: string}[],
   *   small?: boolean;
   *   exortic?: boolean;
   *   css?: string;
   *   className?: string;
   * }
   * ```
   */
  type NoizDatas<Data> = ND<Data>;
  type MakeAsChild<DataId, Datas> = MAC<DataId, Datas>;
}
