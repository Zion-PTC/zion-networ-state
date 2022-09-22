import styled from "styled-components";
import { utility } from "../../../lib";

type InfoSectionStyle = {
  css?: utility.ZionCss<
    "display" | "width" | "height" | "gridTemplateColumns",
    true
  >;
};

export const InfoSection = styled.div<InfoSectionStyle>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
`;
