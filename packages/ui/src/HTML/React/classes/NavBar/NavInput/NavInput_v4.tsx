import styled from "styled-components";
import { P } from "../../../style";
import { BaseNoizProps } from "../../../lib/global";

export interface NavInput_v4Props extends BaseNoizProps {
  inputId: string;
  inputName: string;
  IconComponent?: () => JSX.Element;
  value?: string;
  checked?: boolean;
  iconInput?: boolean;
  keyValueInput?: boolean;
  textInput?: boolean;
}

export class NavInput_v4Props extends BaseNoizProps {
  constructor(props: NavInput_v4Props) {
    super(props);
    this.inputId = props.inputId;
    this.inputName = props.inputName;
    this.IconComponent = props.IconComponent;
    // TODO #30 @ariannatnl riempire =)
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
      // IconComponent,
    } = props;
    const RADIO = "radio";
    // let SafeIconComponent = dataGuard(
    //   IconComponent,
    //   "no component was passed"
    // );
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
            {/* <SafeIconComponent /> */}
            {props.children}
            {/* {IconComponent} */}
          </div>
          <p>{inputId.toLocaleUpperCase()}</p>
        </label>
      </>
    );
  };

  // TODO @giacomogagliano prendere spunto da questo pattern
  chooseLayout() {
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

  render() {
    let Element = this.chooseLayout();
    return <Element {...this.props}></Element>;
  }
}
