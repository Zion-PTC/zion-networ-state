import React from "react";
import { SVGButtonProps } from "../../../style/Buttons";
import { Path } from "../../../style/Path";

export function Trending(props: SVGButtonProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1316_2655)">
        <Path
          {...props}
          d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1316_2655">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
