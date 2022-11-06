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
}

export const Details_v1 = styled(DetailsData_v1)`
  display: grid;
  width: 140%;
  grid-template-columns: 1fr 1fr 1fr;
  #text-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      &:first-child {
        place-self: end;
        margin-right: 0.2rem;
        font-weight: bolder;
      }
    }
  }
`;
