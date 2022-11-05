import { Path } from "../Path";
import { defaultProps } from "../SVGs";
import { Circle } from "../Circle";
import { SVGButtonProps } from "./Types";

export function Sun(props: SVGButtonProps = defaultProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="12" cy="12" r="5.25" strokeWidth="2" />
      <Path
        options={{ stroke: true }}
        d="M12 4V2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M12 22V20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M20 12L22 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M19.4142 4.58579L18 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M4.58579 19.4142L6 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M19.4142 19.4142L18 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M4.58579 4.58579L6 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        options={{ stroke: true }}
        d="M2 12L4 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
