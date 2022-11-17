import { IconInput_v2 } from "../../../../../../HTML/React/classes/NavBar/NavInput/IconInput/IconInput_v2";
import { Tracks } from "../../../../../../HTML/React/components/Icons/Tracks";

export default function index() {
  return (
    <IconInput_v2
      datas={[
        {
          Icona: Tracks,
          iconaProps: {},
          inputId: "tracks",
          inputName: "test",
          checked: true,
        },
      ]}
    ></IconInput_v2>
  );
}
