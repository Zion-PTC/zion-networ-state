import React from "react";
import { SVGButtonProps } from "../../style/Buttons";
import { Path } from "../../style/Path";

export function More_Normal(props: SVGButtonProps) {
  props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        {...props}
        options={{ fill: true }}
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      />
      <Path
        {...props}
        options={{ fill: true }}
        d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
      />
      <Path
        {...props}
        options={{ fill: true }}
        d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
      />
    </svg>
  );
}