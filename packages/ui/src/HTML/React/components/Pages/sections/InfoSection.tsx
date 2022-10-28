import styled from "styled-components";
import { BooleanSizes, Size, utility } from "../../../lib";
// import checkCss from "../../../lib/util/checkCss";
import checkProps from "../../../lib/util/checkProps";
import { CheckSizeOptions } from "../../../lib/util/checkProps/checkSize";

type InfoSectionStyle = {
  css?: utility.ZionCss<
    undefined,
    true,
    "display" | "width" | "height" | "gridTemplateColumns"
  >;
} & (Size | BooleanSizes) & { options?: CheckSizeOptions } & {
    css_?: utility.ZionCss<
      undefined,
      true,
      "display" | "width" | "height" | "gridTemplateColumns" | "placeContent"
    >;
  };

// export const InfoSection = styled.div<InfoSectionStyle>`
//   display: grid;
//   ${(props) => checkProps("checkSize", props as Size)}
//   ${(props) =>
//     checkCss("placeContent", props as { css_: { placeContent: string } })}
//   ${(props) =>
//     checkCss(
//       "gridTemplateColumns",
//       props as { css_: { gridTemplateColumns: string } }
//     )}
// `;

export const InfoSection = styled.div<InfoSectionStyle>`
  display: grid;
  ${(props) => checkProps("checkSize", props as Size)}
  grid-template-columns: ${(props) =>
    props.css_?.gridTemplateColumns
      ? props.css_.gridTemplateColumns
      : "1fr 1fr"};
`;
