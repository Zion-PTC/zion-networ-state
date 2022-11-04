import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { js } from "@zionstate/utils";
import {
  Area,
  Circle,
  CircleStyle,
} from "../../../../style/Areas";
import { SVGButton } from "../../../../style/Buttons";

export type HeadProps_v1 = {
  menuIcon?: JSX.Element;
  circle?: CircleStyle;
} & StyledDefault &
  CssStyled;

export type HeadProps_v2 = CircleStyle & CssStyled;

type HeadProps = HeadProps_v1;

const { ZionError: ze } = js;
const { ZionError } = ze;

export function CardHead_v1(props: HeadProps) {
  const parent =
    useRef<HTMLDivElement>() as RefObject<HTMLDivElement>;
  const [avatarSize, setAvatarSize] = useState(0);
  console.log(props);

  useEffect(() => {
    if (!parent.current) throw new ZionError();
    setAvatarSize(parent.current.clientHeight);
  });

  return (
    <Area cardHead ref={parent} avatarSize={avatarSize}>
      <Circle cardHead {...props.circle} />
      <div></div>
      <div>
        <SVGButton {...props}>{props.menuIcon}</SVGButton>
      </div>
    </Area>
  );
}
