import styled from "styled-components";
import { ProfileProps } from "../Profile";
import {
  ProfDetStyled,
  SocialInfos,
  ProfileDescription,
  SocialLinks,
} from "./ProfileInfos/";

const ProfileInfosArea = styled.div`
  grid-area: infos;
  margin-top: 1.5rem;
  display: grid;
  place-self: center;
  place-items: center;
  grid-auto-rows: 1.5rem 1.5rem 2rem 2rem 2rem 1.5rem
    3.5rem;
  height: 100%;
`;

export function ProfileInfos(props: ProfileProps) {
  const details = {
    followers: 100,
    following: 10,
    tracks: 4,
  };
  const description = {
    text: "38 years old up coming raver...",
  };
  return (
    <ProfileInfosArea>
      <p>{"<account name>"}</p>
      <p>{"@handle"}</p>
      <ProfDetStyled
        css={`
          grid-template-columns: 1fr 1fr 1fr;
        `}
        className={props.className}
        {...details}
      />
      <SocialInfos {...props} size={{ small: true }} />
      <ProfileDescription
        {...description}
      ></ProfileDescription>
      <a>
        <p>show more</p>
      </a>
      <SocialLinks {...props} />
    </ProfileInfosArea>
  );
}
