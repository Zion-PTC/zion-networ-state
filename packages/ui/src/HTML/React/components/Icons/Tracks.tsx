import { SVGButtonProps } from "../../style/Buttons";
import { Path } from "../../style/Path";

export function Tracks(props: SVGButtonProps) {
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
        d="M9.09993 6C7.99993 6 7.09993 6.9 7.09993 8V14.2C6.79993 14.1 6.49993 14 6.09993 14C4.29993 14 2.79993 15.6 3.19993 17.5C3.39993 18.7 4.39993 19.7 5.59993 19.9C7.49993 20.2 9.09993 18.8 9.09993 16.9V8H11.0999C11.5999 8 12.0999 7.6 12.0999 7C12.0999 6.4 11.5999 6 11.0999 6H9.09993Z"
        fill={props.fill}
      />
      <Path
        {...props}
        options={{ fill: true }}
        d="M18.9998 6C17.8998 6 16.9998 6.9 16.9998 8V14.2C16.6998 14.1 16.3998 14 15.9998 14C14.1998 14 12.6998 15.6 13.0998 17.5C13.2998 18.7 14.2998 19.7 15.4998 19.9C17.3998 20.2 18.9998 18.8 18.9998 16.9V8H20.9998C21.4998 8 21.9998 7.6 21.9998 7C21.9998 6.4 21.4998 6 20.9998 6H18.9998Z"
        fill={props.fill}
      />
    </svg>
  );
}