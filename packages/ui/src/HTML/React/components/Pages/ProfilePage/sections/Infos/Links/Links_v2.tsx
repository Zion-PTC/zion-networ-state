import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { Badge } from "../../../../../Items/Badge";
import { Twitter } from "../../../../../Icons/Twitter";

export type TwitterProps = {
  css?: any;
  className?: string;
};

type Links_v2Datas = {
  name: string;
  twitter: TwitterProps;
};

type Links_v2Css = {};

type ToEdit = Links_v2Datas & Links_v2Css;
type FromLibrary = FluidStyled;

export type Links_v2Props = ToEdit & FromLibrary;

const StyledTwitter = styled(Twitter)`
  place-self: end;
`;

export const LinksData = (
  props: PropsWithChildren<Links_v2Props>
) => {
  return (
    <div className={props.className} id="links-area">
      <Badge size="small"></Badge>
      <div id="links">
        <div id="twitter">
          <StyledTwitter {...props.twitter} />
        </div>
        <div id="handle">
          <p>handle</p>
        </div>
      </div>
    </div>
  );
};

export const Links_v2 = styled(LinksData)`
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "follow . .";
  display: grid;
  ${Badge} {
    place-self: center;
  }
  #links {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-items: center;
    #twitter {
      display: grid;
      width: 100%;
      height: 100%;
      place-content: center;
    }
    #handle {
      place-items: center;
      background-color: transparent;
      width: 100%;
    }
  }
`;
