import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { LoadingIconType } from "../../../lib/types/styledComponents/LoadingIconType";

type LoadingIcon_v1Datas = {
  display: boolean;
  Icon: LoadingIconType;
};

export type LoadingIcon_v1Props = LoadingIcon_v1Datas;

export const LoadingIcon_v1Data = (
  props: PropsWithChildren<LoadingIcon_v1Props>
) => {
  return <props.Icon display={props.display}></props.Icon>;
};

const fillable = css`
  width: 100%;
  height: 100%;
`;

export const LoadingIcon_v1 = styled(LoadingIcon_v1Data)`
  ${fillable}
`;
