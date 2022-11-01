import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { js } from "@zionstate/utils";
import { SVGButton } from "../../Elements/ButtonTypes";
import { Area, Circle } from "../../../style/Areas";
import { Div } from "../../../style/Div";

export type HeadProps = {
  menuIcon: JSX.Element;
};

const { ZionError: ze } = js;
const { ZionError } = ze;

export const Head = (props: HeadProps) => {
  const parent =
    useRef<HTMLDivElement>() as RefObject<HTMLDivElement>;
  const [avatarSize, setAvatarSize] = useState(0);

  useEffect(() => {
    if (!parent.current) throw new ZionError();
    setAvatarSize(parent.current.clientHeight);
  });

  return (
    <Area cardHead ref={parent} avatarSize={avatarSize}>
      <Circle cardHead />
      <Div empty></Div>
      <Div empty>
        <SVGButton>{props.menuIcon}</SVGButton>
      </Div>
    </Area>
  );
};
