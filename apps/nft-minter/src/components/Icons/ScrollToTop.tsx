import { SVGButtonProps } from "./Types";

export function ScrollToTop(
  props: SVGButtonProps = { width: "51", height: "51" }
) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="16.6361"
        transform="matrix(4.37114e-08 1 1 -4.37114e-08 25.5504 25.2569)"
        stroke={props.stroke}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
      <path
        d="M17.7523 25.7767C21.0007 22.5283 22.8219 20.7071 26.0703 17.4587L34.3884 25.7767"
        stroke={props.stroke}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
      <path
        d="M17.7523 32.0153C21.0007 28.7669 22.8219 26.9456 26.0703 23.6972L34.3884 32.0153"
        stroke={props.stroke}
        strokeWidth="2.08134"
        strokeLinejoin="round"
      />
    </svg>
  );
}
