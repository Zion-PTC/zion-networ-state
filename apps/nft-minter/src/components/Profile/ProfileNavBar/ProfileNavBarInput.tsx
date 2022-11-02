import { FC } from "react";

const PROFILE = "profile";

export class InputData {
  inputName = PROFILE;
  constructor(public inputId: string) {}
}

export function ProfileNavBarInput(props: {
  Icona: FC;
  input: InputData;
  checked?: boolean;
  className?: string;
}) {
  const { Icona, input, checked } = props;
  const { inputId, inputName } = input;
  const RADIO = "radio";
  return (
    <>
      <input
        className={props.className}
        type={RADIO}
        id={inputId}
        name={inputName}
        defaultChecked={checked}
      />
      <label htmlFor={inputId}>
        <div>
          <Icona />
        </div>
        <p>{inputId.toLocaleUpperCase()}</p>
      </label>
    </>
  );
}
