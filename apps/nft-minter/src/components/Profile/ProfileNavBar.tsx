import { useState } from "react";
import styled, { css } from "styled-components";
import { Album, Tracks, Queue, Share } from "../Icons";
import {
  InputData,
  ProfileNavBarInput,
} from "./ProfileNavBar/ProfileNavBarInput";

type NavBarProps = {
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  icon3?: JSX.Element;
  icon4?: JSX.Element;
};

const Input = styled(ProfileNavBarInput)``;

export function NavBarData(
  props: NavBarProps & StyledDefault
) {
  const tracks = new InputData("tracks");
  const album = new InputData("album");
  const playlist = new InputData("playlist");
  const repost = new InputData("repost");

  return (
    <nav className={props.className}>
      <Input Icona={Tracks} input={tracks} checked />
      <Input Icona={Album} input={album} />
      <Input Icona={Queue} input={playlist} />
      <Input Icona={Share} input={repost} />
    </nav>
  );
}

const ProfileNavBar_v1 = styled(NavBarData)`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  list-style-type: none;
  place-content: end;
  grid-area: navbar;
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
export const ProfileNavBar = ProfileNavBar_v1;
