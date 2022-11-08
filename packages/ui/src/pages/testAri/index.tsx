import React from "react";
import styled from "styled-components";
import { InputData } from "../../HTML/React/components/Pages/ProfilePage/NavBar/Input/Input_v1";
import { Input as I } from "../../HTML/React/components/Pages/ProfilePage/NavBar/Input";
import { Tracks } from "../../HTML/React/components/Icons/Tracks";
import { Album } from "../../HTML/React/components/Icons/Album";
import { Queue } from "../../HTML/React/components/Icons/Queue";

type NavBarProps = {
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  icon3?: JSX.Element;
};
const Input = styled(I)``;

function NewNavbarData(
  props: NavBarProps & StyledDefault
) {
  const tracks = new InputData("tracks");
  const album = new InputData("album");
  const playlist = new InputData("playlist");
  return (
    <nav className={props.className}>
      <Input
        Icona={Tracks}
        input={tracks}
        checked
        {...props}
      ></Input>
      <Input
        Icona={Album}
        input={album}
        {...props}
      ></Input>
      <Input
        Icona={Queue}
        input={playlist}
        {...props}
      ></Input>
    </nav>
  );
}

const NewNavbar = styled(NewNavbarData)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  list-style-type: none;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    background-color: #7c808316;
    border-top: 0.05rem solid
      ${props => props.theme.primary.borderColor};
    font-size: 70%;
    display: grid;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    place-content: center;
    &:hover {
      background-color: #b0b3b520;
    }
    div {
      display: grid;
      place-items: center;
    }
  }
  input:checked + label {
    border-top: 0.1rem solid
      ${props => props.theme.primary.borderColor};
    border-bottom: 2px solid
      ${props => props.theme.secondary.borderColor};
    background-color: ${props =>
      props.theme.primary.backgroundColor};
  }
`;

export default NewNavbar;
