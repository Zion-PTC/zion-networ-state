import { CSSProperties } from "react";
import { css, FlattenSimpleInterpolation } from "styled-components";
import { CssAttributeValueTypes, Css_ } from "../lib";

export class Css<T extends Css_> {
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
  static #checkCssAttribute<T extends Css_>(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation,
    props?: T
  ) {
    let result: FlattenSimpleInterpolation;
    if (props && props.css_ && props.css_[attribute]) {
      const attributeValue = props.css_[attribute];
      result = css`
        ${Css.#kebabize(attribute)}: ${attributeValue};
      `;
    }
    result = defaultValue;
    return result;
  }
  value?: FlattenSimpleInterpolation;
  attributeValue?: CssAttributeValueTypes;
  kebabCase: string;
  constructor(attribute: keyof CSSProperties);
  constructor(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation
  );
  constructor(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation,
    props: { css_?: CSSProperties }
  );
  constructor(
    public attribute: keyof CSSProperties,
    public defaultValue: FlattenSimpleInterpolation = css``,
    public props?: T
  ) {
    this.kebabCase = Css.#kebabize(attribute);
    this.value = Css.#checkCssAttribute(attribute, defaultValue, props);
  }
}

// const gooo = styled.div<{ css_?: CSSProperties }>`
//   display: grid
//     ${(props) =>
//       props.css_?.display
//         ? props.css_.display
//         : css`
//             display: grid;
//           `};
// `;
