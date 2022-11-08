import React from "react";
import styled from "styled-components";
import { Account } from "../../HTML/React/components/Icons/Icone da modificare/Account";
import { ArrowBack } from "../../HTML/React/components/Icons/Icone da modificare/ArrowBack";
import { ArrowLeft } from "../../HTML/React/components/Icons/Icone da modificare/ArrowLeft";
import { ArrowRight } from "../../HTML/React/components/Icons/Icone da modificare/ArrowRight";
import { FilterAlt } from "../../HTML/React/components/Icons/Icone da modificare/FilterAlt";
import { Home } from "../../HTML/React/components/Icons/Icone da modificare/Home";
import { Moon } from "../../HTML/React/components/Icons/Icone da modificare/Moon";
import { Repost } from "../../HTML/React/components/Icons/Icone da modificare/Repost";
import { ScrollToTop } from "../../HTML/React/components/Icons/Icone da modificare/ScrollToTop";
import { Search } from "../../HTML/React/components/Icons/Icone da modificare/Search";
import { Sun } from "../../HTML/React/components/Icons/Icone da modificare/Sun";
import { Trending } from "../../HTML/React/components/Icons/Icone da modificare/Trending";

function indexData() {
  return (
    <div>
      <Account />
      <ArrowBack />
      <ArrowLeft />
      <ArrowRight />
      <FilterAlt />
      <Home />
      <Moon />
      <Repost />
      <ScrollToTop />
      <Search />
      <Sun />
      <Trending />
    </div>
  );
}

export default styled(indexData)``;
