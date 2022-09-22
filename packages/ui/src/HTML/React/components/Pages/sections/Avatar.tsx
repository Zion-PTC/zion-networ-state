import styled from "styled-components";
import { utility } from "../../../lib";

type AvatarStyle = {
  css?: utility.ZionCss<"display", true>;
};

export const Avatar = styled.div<AvatarStyle>`
  display: grid;
`;
