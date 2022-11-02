import styled, { css } from "styled-components";

export const Component = (props: { name: string }) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

const fillable = css`
  width: 100%;
  height: 100%;
`;

export const ComponentStyled = styled(Component)`
  ${fillable}
`;
