import { NavInput } from "../../../../HTML/React/classes";
import { Tracks } from "../../../../HTML/React/components/Icons";

const Na = NavInput({ iconInput: true });

export default function index() {
  return (
    <Na
      datas={[
        {
          inputId: "carico",
          iconaProps: {},
          inputName: "",
          Icona: Tracks,
        },
      ]}
    ></Na>
  );
}
