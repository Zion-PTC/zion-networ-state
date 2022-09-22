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

export type BasicComponentProps<P> = PropsWithChildren<P>;
export type BasicFC<P> = FC<BasicComponentProps<P>>;

export type BasicFCFactory<P> = FunctionComponentFactory<P>;

// This is just to collect some types that I find useful for
// the creation of components in the Library.
export namespace utility {
  export type FunctionComponent = FuncComp;
  export type FunctionComponentElement<P> = FCE<P>;
  export type AllHTMLAttributes<T> = allHTML<T>;
  export type CSSProperties = CSS;
  export type ClassicElement<P> = CE<P>;
}
