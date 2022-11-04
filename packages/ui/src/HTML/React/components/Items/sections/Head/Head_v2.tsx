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
import { Div } from "../../../../style/Div";
import { SVGButton } from "../../../../style/Buttons";
import styled from "styled-components";

type HeadProps_v1 = {
  menuIcon?: JSX.Element;
  circle?: CircleStyle;
} & StyledDefault &
  CssStyled;

type HeadProps = HeadProps_v1;

const { ZionError: ze } = js;
const { ZionError } = ze;

export function CardHeadData(props: HeadProps) {
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
      <Div empty></Div>
      <Div empty>
        <SVGButton {...props}>{props.menuIcon}</SVGButton>
      </Div>
    </Area>
  );
}

export const CardHead_v2 = styled(CardHeadData)`
  display: grid;
  place-items: center;
  z-index: 1;
  grid-template-rows: 1fr;
  border-top: 1px solid;
`;
/* grid-template-columns: ${props =>
  props.avatarSize}px 4fr 1fr; */
/* ${border1PxSolid_wo_top} */
