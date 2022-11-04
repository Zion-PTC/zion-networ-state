import styled from "styled-components";
import { Circle, Social as Area } from "../../../style";
import { Social_v2 } from "./Social/v2";

const Menu = styled(Circle)``;

export type SocialDatas = {};

export type SocialCss = {};

export type SocialHandles = {};

export type SocialProps = SocialDatas &
  SocialCss &
  SocialHandles &
  FluidStyled;

export const Social_v1 = (props: SocialProps) => {
  return (
    <Area cardSocial {...props}>
      <Circle small />
      <Circle small />
      <Circle small />
      <Menu small />
    </Area>
  );
};

export const Social = Social_v2;
