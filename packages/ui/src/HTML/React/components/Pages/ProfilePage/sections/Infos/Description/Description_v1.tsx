import styled from "styled-components";

type ProfileDescriptionProps = {
  text: string;
};

export function DescriptionData(
  props: ProfileDescriptionProps & StyledDefault
) {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
}

export const Description_v1 = styled(DescriptionData)`
  height: 100%;
  display: grid;
  place-items: center;
`;
