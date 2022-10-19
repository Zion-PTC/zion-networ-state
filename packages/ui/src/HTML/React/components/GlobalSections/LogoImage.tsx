import styled from "styled-components";

const Area = styled.div`
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const Circle = styled.div`
  height: 60%;
  width: 60%;
  border-radius: 100%;
  border: 0.05rem solid;
  background-color: transparent;
`;

export const LogoImage = () => {
  return (
    <Area>
      <Circle />
    </Area>
  );
};
