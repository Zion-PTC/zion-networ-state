import styled from "styled-components";
import { P } from "../../../style";
import { IconProps } from "../../Icon";
import { BaseNoizProps } from "../../../lib/global";

export interface NavInput_v4Props extends BaseNoizProps {
  inputId: string;
  inputName: string;
  IconComponent: (props: IconProps) => JSX.Element;
  value?: string;
  checked?: boolean;
  iconInput?: boolean;
  keyValueInput?: boolean;
  textInput?: boolean;
}

export class NavInput_v4Props extends BaseNoizProps {
  constructor(props: NavInput_v4Props) {
    super(props);
  }
}
export interface NavInput_v4State {}

export class NavInput_v4State {}

export interface NavInput_v4
  extends BaseNoiz<NavInput_v4Props, NavInput_v4State> {}

export class NavInput_v4 extends BaseNoiz<
  NavInput_v4Props,
  NavInput_v4State
> {
  // constructor(props: Partial<NavInput_v4Props>)
  constructor(props: NavInput_v4Props) {
    super(props);
  }

  KeyValue = (props: NavInput_v4Props) => {
    const {
      inputId,
      inputName,
      checked,
      className,
      value,
    } = props;
    const RADIO = "radio";
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        ></input>
        <label htmlFor={inputId}>
          <div>
            <P bold>{inputId}</P>
            <P dimmed>{value}</P>
          </div>
        </label>
      </>
    );
  };

  Text = (props: NavInput_v4Props) => {
    const { inputId, inputName, checked, className } =
      props;
    const RADIO = "radio";
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        ></input>
        <label htmlFor={inputId}>
          <P>{inputId}</P>
        </label>
      </>
    );
  };

  Icon = (props: NavInput_v4Props) => {
    const {
      inputId,
      inputName,
      checked,
      className,
      IconComponent,
    } = props;
    const RADIO = "radio";
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        />
        <label htmlFor={inputId}>
          <div>
            <IconComponent />
          </div>
          <p>{inputId.toLocaleUpperCase()}</p>
        </label>
      </>
    );
  };

  // TODO @giacomogagliano prendere spunto da questo pattern
  mapperBuilder() {
    const props = this.props;
    const Text = this.Text;
    const KeyValue = this.KeyValue;
    const Icon = this.Icon;
    let html = styled(this.Html)``;
    if (props.textInput) html = styled(Text)``;
    if (props.keyValueInput) html = styled(KeyValue)``;
    if (props.iconInput) html = styled(Icon)``;
    return html;
  }
  Html = (props: NavInput_v4Props) => {
    return <h1>{props.children}</h1>;
  };

  Style = this.mapperBuilder();

  StyledHtml = styled(this.Html)``;
  render() {
    let Element = this.Style;
    return <Element {...this.props}></Element>;
  }
}
