import { NavInput_v3 } from "../../../../../HTML/React/classes";
import { LogoZion } from "../../../../../HTML/React/components/Icons";

export default function index() {
  return (
    <NavInput_v3
      keyValueInput
      datas={[
        {
          IconComponent: LogoZion,
          Icon: { datas: [] },
          inputId: "inputId",
          inputName: "inputName",
          value: "value",
          checked: true,
        },
      ]}
    ></NavInput_v3>
  );
}
