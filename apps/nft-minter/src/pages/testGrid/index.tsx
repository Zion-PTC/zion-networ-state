import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const ROWS = 10;
const COLUMNS = 10;

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

type ProductAreaCss = {
  blocksize?: number;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
};

const ProductArea = styled.div<ProductAreaCss>`
  width: 50%;
  height: 50%;
  background-color: yellow;
  display: grid;
  /* grid-template-rows: ${(props) =>
    props.blocksize
      ? "repeat(10," + props.blocksize.toString() + "px);"
      : "10px"};
  grid-template-columns: ${(props) =>
    props.blocksize
      ? "repeat(10," + props.blocksize.toString() + "px);"
      : "10px"}; ; */
  grid-template-columns: ${(props) =>
    props.blocksize ? `repeat(${COLUMNS},${props.blocksize}px);` : "10px;"};
  grid-auto-rows: ${(props) =>
    props.blocksize ? props.blocksize + "px;" : ""};
`;

export default function index(props) {
  const [blocksize, setBlocksize] = useState(0);
  const productarea = useRef<HTMLDivElement>();

  useEffect(() => {
    const clientWidth = productarea.current.clientWidth;
    const blockSize = clientWidth / COLUMNS;
    setBlocksize(blockSize);
  });
  console.log(blocksize);

  return (
    <Layout {...props.layout}>
      <Container>
        <ProductArea ref={productarea} blocksize={blocksize}>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
          <div>ciao</div>
        </ProductArea>
      </Container>
    </Layout>
  );
}
