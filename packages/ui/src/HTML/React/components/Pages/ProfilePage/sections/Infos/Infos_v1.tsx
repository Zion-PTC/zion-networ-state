import styled from "styled-components";
import { ProfilePageProps } from "../..";
import { Description } from "./Description";
import { Details } from "./Details";
import { Links } from "./Links";
import { SocialInfos } from "./SocialInfos";

const Infos = styled.div`
  grid-area: infos;
  margin-top: 1.5rem;
  display: grid;
  place-self: center;
  place-items: center;
  grid-auto-rows: 1.5rem 1.5rem 2rem 2rem 2rem 1.5rem
    3.5rem;
  height: 100%;
`;

export function Infos_v1(props: ProfilePageProps) {
  const details = {
    followers: 100,
    following: 10,
    tracks: 4,
  };
  const description = {
    text: "38 years old up coming raver...",
  };

  return (
    <Infos>
      <p>{"<account name>"}</p>
      <p>{"@handle"}</p>
      <Details
        css={`
          grid-template-columns: 1fr 1fr 1fr;
        `}
        className={props.className}
        {...details}
      />
      <SocialInfos size={{ small: true }} {...props} />
      <Description {...description}></Description>
      <a>
        <p>show more</p>
      </a>
      <Links {...props} />
    </Infos>
  );
}
