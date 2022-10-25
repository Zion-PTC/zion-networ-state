import { LoadingWaves } from "./LoadingTypes";

export default function Loading(props: { type: "waves"; display?: string }) {
  let LoadingIcon: () => JSX.Element;

  switch (props.type) {
    case "waves":
      LoadingIcon = () => <LoadingWaves display={props.display} />;
      break;

    default:
      LoadingIcon = () => <LoadingWaves display={props.display} />;
      break;
  }

  return <LoadingIcon></LoadingIcon>;
}
