import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import { SocialProps } from "../../../Items/sections";
import { Description } from "./Description";
import { Details, DetailsProps } from "./Details";
import { Links, LinksProps } from "./Links";
import { SocialInfos } from "./SocialInfos";

type InfosData_v2 = {
  links: LinksProps;
  details: DetailsProps;
  social: SocialProps;
  description: string;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
};

export type InfosProps_v2 = FluidStyled & InfosData_v2;

export function InfosData_v2(
  props: PropsWithChildren<InfosProps_v2>
) {
  const details = {
    followers: 100,
    following: 10,
    tracks: 4,
  };
  // const description = {
  //   text: "38 years old up coming raver...",
  // };
  function handleClick() {
    props.setIsShowMore(!props.isShowMore);
  }

  return (
    <div className={props.className}>
      <p>{"<account name>"}</p>
      <p>{"@handle"}</p>
      <Details {...props.details} {...details} />
      <SocialInfos
        size={{ small: true }}
        {...props.social}
      />
      <Description text={props.description}></Description>
      <button onClick={handleClick}>Show More</button>
      <Links {...props.links} />
    </div>
  );
}

const shown = css`
  grid-template-rows: 1.5fr 1.5fr 2fr 2fr auto 1.5fr 3.5fr;
`;

export const Infos_v2 = styled(InfosData_v2)`
  grid-area: infos;
  display: grid;
  overflow: hidden;
  margin-top: 1.5rem;
  place-self: center;
  place-items: center;
  grid-template-rows: 1.5fr 1.5fr 2fr 2fr 2fr 1.5fr 3.5fr;
  ${props => {
    if (props.isShowMore) return shown;
    else return "";
  }}
  height: 100%;
`;
