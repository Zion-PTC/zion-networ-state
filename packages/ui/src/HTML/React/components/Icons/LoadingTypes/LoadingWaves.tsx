import { CssStyled } from "../../../lib";
import { LoadingWavesArea } from "../../../style/Areas/LoadingWavesArea";

export type LoadingWavesProps = {
  display?: string;
} & CssStyled &
  StyledDefault;

export function LoadingWaves_v1(props: LoadingWavesProps) {
  return (
    <LoadingWavesArea
      css={props.css}
      className={props.className}
      css_={{
        display: props.css_?.display
          ? props.css_?.display
          : undefined,
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </LoadingWavesArea>
  );
}

export const LoadingWaves = LoadingWaves_v1;
