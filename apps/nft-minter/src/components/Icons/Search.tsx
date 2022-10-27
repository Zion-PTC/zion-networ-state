import { defaultProps } from "../SVGs";
import { SVGButtonProps } from "./Types";

export function Search(props: SVGButtonProps = defaultProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="7" stroke={props.stroke} strokeWidth="2" />
      <path
        d="M15 15L21 21"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
