import styled, { css } from "styled-components";
import { ProfilePageProps } from "../../..";
import {
  InfoSection,
  TextArea,
} from "../../../../../../style";
import { Twitter } from "../../../../../Icons/Twitter";
import { Badge } from "../../../../../Items/Badge";

const SocialLinksArea = styled(InfoSection)`
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const StyledTwitter = styled(Twitter)`
  place-self: end;
`;

const Handle = styled(TextArea)`
  place-items: center;
  background-color: transparent;
`;

const LinksArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  place-items: center;
`;

const LogoArea = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-content: center;
`;

export function SocialLinks_v1(props: ProfilePageProps) {
  return (
    <SocialLinksArea size="big">
      <Badge theme={props.theme} size="small"></Badge>
      <LinksArea>
        <LogoArea>
          <StyledTwitter {...props} />
        </LogoArea>
        <Handle filled>
          <p>handle</p>
        </Handle>
      </LinksArea>
    </SocialLinksArea>
  );
}

export function SocialLinks_v2(props: ProfilePageProps) {
  return (
    <div className={props.className}>
      <Badge theme={props.theme} size="small"></Badge>
      <div id="links">
        <LogoArea>
          <a className={props.className}></a>
          <StyledTwitter {...props} />
        </LogoArea>
        <Handle filled {...props}>
          <p>handle</p>
        </Handle>
      </div>
    </div>
  );
}

const small = css`
  width: 50vw;
`;

const mid = css`
  width: 60vw;
`;

const big = css`
  width: 70vw;
`;

export const Links_v1 = styled(SocialLinks_v2)`
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas: "follow . .";
  display: grid;
  ${props => props.size?.big && big}
  ${props => props.size?.mid && mid}
  ${props => props.size?.small && small}
  #links {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    place-items: center;
  }
`;
