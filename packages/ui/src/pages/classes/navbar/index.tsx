import {
  NavBar,
  NavInputProps,
} from "../../../HTML/React/classes";
import { Queue } from "../../../HTML/React/components/Icons/Queue";
import { Tracks } from "../../../HTML/React/components/Icons/Tracks";

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
