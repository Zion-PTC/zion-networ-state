import { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { js } from "@zionstate/utils";

const { ZionError: ze } = js;
const { ZionError } = ze;

const Area = styled.div<{ avatarSize: number }>`
  display: grid;
  grid-template-columns: ${(props) => props.avatarSize}px 4fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const Circle = styled.div`
  height: 60%;
  width: 60%;
  border-radius: 100%;
  border: 0.05rem solid;
  background-color: #e5e5e5;
`;

const Menu = styled.div``;

export const Head = () => {
  const parent = useRef<HTMLDivElement>() as RefObject<HTMLDivElement>;
  const [avatarSize, setAvatarSize] = useState(0);

  useEffect(() => {
    if (!parent.current) throw new ZionError();
    setAvatarSize(parent.current.clientHeight);
  });

  return (
    <Area ref={parent} avatarSize={avatarSize}>
      <Circle />
      <div></div>
      <Menu>menu</Menu>
    </Area>
  );
};
