import styled, {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
import { CssKeysFromStringArray, FluidThemed } from "../lib";

type PropTypes = "union" | "object";

export class Prop<
  Key extends string,
  CssProps extends (keyof CSSProperties)[],
  Types extends string,
  PropsInterface extends CssKeysFromStringArray<CssProps>,
  ConfigObject extends { [props in Types]: PropsInterface },
  Props extends { [props in Key]?: Types },
  FluidThemedInterpolation extends FluidThemed<Props>,
  Defaults extends { [props in Types]?: FluidThemedInterpolation }
> {
  static #kebabize(str: string) {
    return str
      .split("")
      .map((letter, idx) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
          : letter;
      })
      .join("");
  }
  values: Defaults;
  constructor(
    public key: Key,
    public cssProps: CssProps,
    public propType: PropTypes,
    public types: Types[],
    public object: ConfigObject,
    public defaultCss: FlattenSimpleInterpolation
  ) {
    let values: Defaults | { [prosp in Types]?: any } = {};
    types.forEach((type) => {
      cssProps.forEach((cssProp) => {
        const kebabCase = Prop.#kebabize(cssProp);
        // @ts-ignore
        const value = object[type][cssProp];
        values[type] as Defaults;
        values[type] = css`
          // @ts-ignore
          ${kebabCase}: ${value};
        ` as Defaults[Types];
      });
    });
    this.values = values as Defaults;
  }
  checkProps(props: Props): FluidThemedInterpolation | undefined {
    let res: FluidThemedInterpolation;
    if (!props[this.key]) return this.defaultCss as FluidThemedInterpolation;
    const type = props[this.key] as Types;

    res = this.values[type] as FluidThemedInterpolation;
    return res;
  }
}

const sizeProp = new Prop(
  "size",
  ["width", "height"],
  "union",
  ["small", "mid", "big"],
  {
    small: { width: "", height: "" },
    mid: { height: "", width: "" },
    big: { height: "", width: "" },
  },
  css``
);
///////////
const gridProp = new Prop(
  "gridSetting",
  ["display", "gridTemplateColumns"],
  "union",
  ["small", "mid", "big"],
  {
    small: { display: "", gridTemplateColumns: "" },
    mid: { display: "", gridTemplateColumns: "" },
    big: { display: "", gridTemplateColumns: "" },
  },
  css``
);

export const gogogogo = styled.div<{
  gridSetting?: "big" | "small" | "mid" | undefined;
  size?: "big" | "small" | "mid" | undefined;
}>`
  ${(props) => gridProp.checkProps(props)}
  ${(props) => sizeProp.checkProps(props)}
`;
