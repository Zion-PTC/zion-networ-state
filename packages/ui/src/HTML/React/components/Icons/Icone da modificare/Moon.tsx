import { defaultIconProps } from "../../../lib/constants/defaultIconProps";
import { Path } from "../../../style/Path";

export function Moon(
  props: {
    width?: string;
    height?: string;
    fill?: string;
  } = defaultIconProps
) {
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
        d="M9.36077 3.29292C9.6659 3.59804 9.74089 4.06447 9.54678 4.44985C9.04068 5.45471 8.75521 6.59037 8.75521 7.79559C8.75521 11.9097 12.0903 15.2448 16.2044 15.2448C17.4097 15.2448 18.5453 14.9594 19.5502 14.4532C19.9356 14.2591 20.402 14.3341 20.7071 14.6393C21.0122 14.9444 21.0872 15.4108 20.8931 15.7962C19.3396 18.8806 16.1428 21 12.4492 21C7.23056 21 3 16.7695 3 11.5508C3 7.85721 5.11941 4.66041 8.20384 3.10691C8.58923 2.91281 9.05565 2.9878 9.36077 3.29292ZM6.8217 6.66962C5.68637 7.97743 5 9.68433 5 11.5508C5 15.6649 8.33513 19 12.4492 19C14.3157 19 16.0226 18.3137 17.3304 17.1783C16.9611 17.2222 16.5853 17.2448 16.2044 17.2448C10.9858 17.2448 6.75521 13.0143 6.75521 7.79559C6.75521 7.41474 6.77779 7.03898 6.8217 6.66962Z"
      />
    </svg>
  );
}
