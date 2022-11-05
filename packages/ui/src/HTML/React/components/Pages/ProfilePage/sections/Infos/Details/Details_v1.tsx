import styled from "styled-components";

export type Details_v1Props = {
  tracks: number;
  followers: number;
  following: number;
  className?: string;
};

function DetailsData_v1(props: Details_v1Props) {
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

export const Details_v1 = styled(DetailsData_v1)`
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
