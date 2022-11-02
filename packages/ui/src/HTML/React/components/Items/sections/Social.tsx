import styled from "styled-components";
import { CssStyled, StyledCss } from "../../../lib";
import { Circle, Social as Area } from "../../../style";

const Menu = styled(Circle)``;

export type SocialProps = CssStyled & StyledCss;

export const Social = (props: SocialProps) => {
  return (
    <Area cardSocial {...props}>
      <Circle small />
      <Circle small />
      <Circle small />
      <Menu small />
    </Area>
  );
};
