import styled from "styled-components";
import { border1PxSolid_wo_top } from "../../../../style/common";
import { InfosProps } from "../Infos";

export const InfosData = (props: InfosProps) => {
  return (
    <div className={props.className} css={props.css}>
      <></>
    </div>
  );
};

export const Infos_v3 = styled(InfosData)`
  display: grid;
  place-items: center;
  ${border1PxSolid_wo_top}
  grid-template-columns: 1fr 1fr;
`;
