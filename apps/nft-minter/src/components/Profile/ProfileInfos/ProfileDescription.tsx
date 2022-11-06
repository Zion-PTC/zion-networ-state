import styled from "styled-components";

type ProfileDescriptionProps = {
  text: string;
};

export function ProfileDescription_(
  props: ProfileDescriptionProps & StyledDefault
) {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
}

export const ProfDesc = styled(ProfileDescription_)`
  height: 100%;
  display: grid;
  place-items: center;
`;

export const ProfileDescription = ProfDesc;
