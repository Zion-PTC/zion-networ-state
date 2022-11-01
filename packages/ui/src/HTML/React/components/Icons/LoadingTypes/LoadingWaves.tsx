import { CssStyled, StyledCss } from "../../../lib";
import { LoadingWavesArea } from "../../../style/Areas/LoadingWavesArea";

export type LoadingWavesProps = {
  display?: string;
} & CssStyled &
  StyledCss;

export function LoadingWaves(props: LoadingWavesProps) {
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
