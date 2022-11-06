import { LoadingWavesArea } from "../../../style/Areas/LoadingWavesArea";
import { LoadingWaves_v2 } from "./LoadingWaves/v2";

export type LoadingWavesProps = {
  display: boolean;
};

export function LoadingWaves_v1(props: LoadingWavesProps) {
  return (
    <LoadingWavesArea display={props.display}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </LoadingWavesArea>
  );
}

export const LoadingWaves = LoadingWaves_v2;
