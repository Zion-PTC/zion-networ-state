import React from "react";
import styled from "styled-components";

function testariData(props: any) {
  return (
    <div className={props.className} css={props.css}>
      <div id="row">
        <div id="cell">HEADER</div>
        <div id="cell">lol</div>
      </div>
      <div id="row">
        <img src={props.src}></img>
        <div id="cell">HEADER</div>
        <div id="cell">lol</div>
      </div>
      <div id="row">
        <div id="cell">HEADER</div>
        <div id="cell">lol</div>
      </div>
    </div>
  );
}

const testari2 = styled(testariData)`
  display: grid;
  overflow: auto;
  grid-template-rows: 1fr 1fr 1fr;
  height: 90%;
  width: 90%;
  #row  {
    overflow: auto;
    border-top: 1px solid red;
    border-left: 1px solid red;
    border-right: 1px solid red;
    display: grid;
    img {
      border-image: none;
    }
    #cell {
      display: grid;
    }
  }
  #row:last-child {
    border-top: 1px solid red;
    border-left: 1px solid red;
    border-right: 1px solid red;
    border-bottom: 1px solid red;
  }
`;

export default testari2;
