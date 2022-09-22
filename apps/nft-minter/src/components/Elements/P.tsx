import styled from "styled-components";

type PStyled = {
  bold?: boolean;
  dimmed?: boolean;
};

export const P = styled.p<PStyled>`
  ${(props) => (props.bold ? "font-weight: bold;" : "")}
  ${(props) => (props.dimmed ? "color: grey;" : "")}
`;
