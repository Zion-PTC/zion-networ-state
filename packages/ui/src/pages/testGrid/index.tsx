import React from "react";
import styled from "styled-components";

const let2 = class {};
const bobob = { let2: class {}, ciao: "", ciao2: "" };

const cond = bobob.let2 === let2;
console.log(cond);

function indexData() {
  return (
    <div
      css={`
        display: grid;
        /* grid-auto-flow: column; */
        grid-template-columns: repeat(auto-fit, 10%);
        div {
          display: inline;
        }
      `}
    >
      <div></div>
      {/* <Account />

      <FilterAlt />
      <Home />
      <Moon />
      <Repost />
      <ScrollToTop />
      <Search />
      <Sun />
      <Trending /> */}
      {/* <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div>
      <div>cio</div> */}
    </div>
  );
}

export default styled(indexData)``;
