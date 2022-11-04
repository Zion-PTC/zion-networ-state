import styled from "styled-components";
import { border1PxSolid_wo_top } from "../../../../style/common";
import { SocialProps } from "../Social";

export const SocialData = (props: SocialProps) => {
  return (
    <div {...props}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export const Social_v2 = styled(SocialData)`
  display: grid;
  width: 100%;
  ${border1PxSolid_wo_top}
  font-size: 14px;
  grid-template-columns: 1fr 1fr 1fr 3fr 3px;
  align-items: center;
  div {
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border: 0.05rem solid;
    background-color: #e5e5e5;
    justify-self: center;
  }
`;
