import styled from "styled-components";
import { ImageProps } from "../Items/sections/Types";

const Area = styled.div`
  width: 20rem;
  height: 100%;
  border: 1px solid black;
  z-index: 2;
  place-self: center;
  background-color: #fcdde3;
  //
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
`;

export const Image = (props: ImageProps) => {
  return (
    <Area>
      <Img src={props.src} alt="nft"></Img>
    </Area>
  );
};
