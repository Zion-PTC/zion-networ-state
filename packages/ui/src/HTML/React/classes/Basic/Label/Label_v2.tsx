import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputType } from "../../../lib/global";
import {
  GComponent,
  StyledGComponent,
} from "../../../lib/global/BaseNoiz/BaseNoiz_v3";
import { InputProps, InputPropsType } from "../Input";
import { Input_v2 } from "../Input/Input_v2";

export interface Label_v2PropsType extends InputPropsType {
  name: string;
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

/**
 * TODO #32 @arianna sistemare i file per farli funzionare con
 * la nuova BaseNoiz:
 * - aggiungere gli enum standard. Ho creato uno snippet che
 *   te li fa. si trova in questa cartella
 * - fatti gli enum, vanno aggiunti i due type nei generici
 *   di BaseNoizProps, cosi :
 *   `BaseNoizProps<layoutTypes,styleTypes>`
 * - estendere la classe State di ogni file con la classe
 *   `BaseNoizState`.
 * - fatto quello va aggiunto `BaseNoizProps` come generico
 *   in `BaseNoizState`
 * - aggiungere i due types delle enum nei generici della
 *   classe principale (quella che estende BaseNoiz).
 * - cambiare il nome al componente nella classe e nominarlo
 *   main
 * - aggiungere un elemento `layouts` subito dopo il
 *   componente e iniziare un array
 * - nell'array creare `new this.Layout` con le info `name`
 *   e `component`
 * - rinominare lo stile in `defaultStyle`
 * - creare un array `styledlayouts` e inserirvici dei `new
 *   this.Style()` con le info necessarie.
 *
 * a questo punto dovrebbe funzionare tutto ok.
 */

export interface Label_v2Props
  extends Label_v2PropsType,
    BaseNoizProps {}
export class Label_v2Props extends BaseNoizProps {}

export interface Label_v2State {}
export class Label_v2State {}

export interface Label_v2
  extends BaseNoiz<Label_v2Props, Label_v2State> {
  Html: GComponent<Label_v2Props>;
  StyledHtml: StyledGComponent<Label_v2Props>;
}

export class Label_v2 extends BaseNoiz<
  Label_v2Props,
  Label_v2State
> {
  Html = (props: Label_v2Props) => {
    const {
      name,
      handleChange,
      placeholder,
      type,
      min,
      max,
      step,
      preventDefault,
      value,
    } = props;

    const inputProps: InputProps = new InputProps();
    inputProps.preventDefault = preventDefault;
    inputProps.handleChange = handleChange;
    inputProps.placeholder = placeholder;
    inputProps.value = value;
    inputProps.step = step;
    inputProps.type = type;
    inputProps.max = max;
    inputProps.min = min;
    return (
      <>
        <label className={props.className}>
          <p>{name}</p>
          <Input_v2 {...inputProps} />
        </label>
      </>
    );
  };

  StyledHtml = styled(this.Html)``;

  render() {
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
