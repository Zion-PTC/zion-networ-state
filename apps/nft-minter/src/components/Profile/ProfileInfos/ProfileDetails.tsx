// import { HTML } from "@zionstate/ui";
import styled from "styled-components";

type ProfileDetailsProps = {
  tracks: number;
  followers: number;
  following: number;
  className?: string;
};

function ProfileDetails_v2(props: ProfileDetailsProps) {
  return (
    <div className={props.className}>
      <div id="text-area">
        <p>{props.tracks}</p>
        <p>Tracks</p>
      </div>
      <div id="text-area">
        <p>{props.followers}</p>
        <p>Followers</p>
      </div>
      <div id="text-area">
        <p>{props.following}</p>
        <p>Following</p>
      </div>
    </div>
  );
}

export const ProfDetStyled = styled(ProfileDetails_v2)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      &:first-child {
        place-self: end;
        margin-right: 0.5rem;
      }
    }
  }
`;
