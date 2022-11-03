import { CssStyled } from "../../lib";
import { LoadingWaves } from "./LoadingTypes";

export type LoadingProps = {
  type: "waves";
  display?: string;
} & CssStyled &
  StyledDefault;

export default function Loading(props: LoadingProps) {
  let LoadingIcon: () => JSX.Element;

  switch (props.type) {
    case "waves":
      LoadingIcon = () => (
        <LoadingWaves
          display={props.display}
          className={props.className}
          css={props.css}
        />
      );
      break;

    default:
      LoadingIcon = () => (
        <LoadingWaves
          display={props.display}
          className={props.className}
          css={props.css}
        />
      );
      break;
  }

  return <LoadingIcon></LoadingIcon>;
}
