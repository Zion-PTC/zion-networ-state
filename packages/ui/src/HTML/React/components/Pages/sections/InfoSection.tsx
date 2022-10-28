import styled from "styled-components";
import { utility } from "../../../lib";

type InfoSectionStyle = {
  css?: utility.ZionCss<
    undefined,
    true,
    "display" | "width" | "height" | "gridTemplateColumns"
  >;
};

export const InfoSection = styled.div<InfoSectionStyle>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${(props) =>
    props.css?.gridTemplateColumns ? props.css.gridTemplateColumns : "1fr 1fr"};
`;
