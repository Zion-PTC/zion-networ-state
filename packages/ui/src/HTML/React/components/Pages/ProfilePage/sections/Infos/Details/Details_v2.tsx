import styled from "styled-components";
import { PropsWithChildren } from "react";

type Details_v2Datas = {
  tracks: number;
  followers: number;
  following: number;
  className?: string;
};

type Details_v2Css = {};

type ToEdit = Details_v2Datas & Details_v2Css;
type FromLibrary = FluidStyled;

export type Details_v2Props = ToEdit & FromLibrary;

export const DetailsData = (
  props: PropsWithChildren<Details_v2Props>
) => {
  return (
    <div className={props.className}>
      <div id="text-area">
        <p id="bold">{props.tracks}</p>
        <p>Tracks</p>
      </div>
      <div id="text-area">
        <p id="bold">{props.followers}</p>
        <p>Followers</p>
      </div>
      <div id="text-area">
        <p id="bold">{props.following}</p>
        <p>Following</p>
      </div>
    </div>
  );
};

export const Details_v2 = styled(DetailsData)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  #text-area {
    display: inline;
    p {
      display: inline;
      place-self: center;
      &:first-child {
        place-self: end;
        margin-right: 0.2rem;
        font-weight: bolder;
      }
    }
  }
`;
