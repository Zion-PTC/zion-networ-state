import { SVGButtonProps } from "../../../../../style/Buttons";

const PROFILE = "profile";

export type Input_v1Datas = {
  Icona: (props: SVGButtonProps) => JSX.Element;
  input: InputData;
  checked?: boolean;
};

type Input_v1Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type InputProps_v1 = Input_v1Datas & StyledDefault;

export class InputData {
  inputName = PROFILE;
  constructor(public inputId: string) {}
}

export function Input_v1(props: InputProps_v1) {
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
