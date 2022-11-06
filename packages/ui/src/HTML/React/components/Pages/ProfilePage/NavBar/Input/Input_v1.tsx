import { SVGButtonProps } from "../../../../../style/Buttons";

const PROFILE = "profile";

export class InputData {
  inputName = PROFILE;
  constructor(public inputId: string) {}
}

export function Input_v1(props: {
  Icona: (props: SVGButtonProps) => JSX.Element;
  input: InputData;
  checked?: boolean;
  className?: string;
  theme: FluidTheme;
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
          <Icona {...props} />
        </div>
        <p>{inputId.toLocaleUpperCase()}</p>
      </label>
    </>
  );
}
