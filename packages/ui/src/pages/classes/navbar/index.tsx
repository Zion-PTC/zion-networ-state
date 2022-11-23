import React from "react";
import {
  NavBar,
  NavInputProps,
  Tracks,
} from "../../../HTML/React/classes";

export default function index() {
  const data: NavInputProps[] = [
    {
      datas: [
        {
          Icona: Tracks,
          iconaProps: {},
          inputId: "tracks",
          inputName: "test",
          checked: true,
        },
      ],
    },
    // {
    //   input: {
    //     Icona: Tracks,
    //     iconaProps: {},
    //     inputId: "tracks",
    //     inputName: "test",
    //     value: "",
    //     checked: true,
    //   },
    // },
    // {
    //   input: {
    //     Icona: Queue,
    //     iconaProps: {},
    //     inputId: "playlist",
    //     inputName: "test",
    //     value: "value",
    //   },
    // },
  ];
  return (
    <>
      <NavBar datas={data} text></NavBar>
    </>
  );
}
