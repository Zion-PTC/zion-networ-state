import React from "react";
import styled from "styled-components";
import { ItemsArea } from "../../../HTML/React/classes";

const Div = styled.div<{ color: number }>`
  background-color: red;
`;

export default function index() {
  const array10 = new Array(50).fill("");
  return (
    <ItemsArea
      avatarSize={0}
      height={0}
      layout="main"
      style="defaultStyle"
    >
      <>
        {array10.map(() => (
          <Div></Div>
        ))}
      </>
    </ItemsArea>
  );
}
