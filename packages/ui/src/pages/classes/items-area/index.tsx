import React from "react";
import styled from "styled-components";
import { ItemsArea } from "../../../HTML/React/classes";

const Div = styled.div<{ color_number: number }>`
  background-color: ${props => {
    return `hsl(${props.color_number},100%,50%)`;
  }};
`;

export default function index() {
  const array10 = new Array(150).fill("");
  return (
    <ItemsArea
      avatarSize={0}
      height={0}
      layout="main"
      style="defaultStyle"
    >
      <>
        {array10.map((_, idx) => (
          <Div color_number={idx * 2} key={idx}></Div>
        ))}
      </>
    </ItemsArea>
  );
}
