import styled from "styled-components";
import { P } from "../../../style";
import { IconAsChild, IconClassProps } from "../../Icon";

///// TYPES
export type NavInput_v3Data = utility.Flatten<
  {
    inputId: string;
    inputName: string;
    checked?: boolean;
    value?: string;
    IconComponent: (props: IconClassProps) => JSX.Element;
  } & IconAsChild
>;

export type NavInput_v3Booleans = {
  checked?: boolean;
};

export type NavInput_v3Props = NoizProps<
  NavInput_v3Data & NavInput_v3Booleans
>;

export type NavInput_v3ClassBooleans = {
  iconInput?: boolean;
  keyValueInput?: boolean;
  textInput?: boolean;
};

export type NavInput_v3ClassProps =
  NoizDatas<NavInput_v3Props> & NavInput_v3ClassBooleans;

export type NavInput_v3AsChild = MakeAsChild<
  "NavInput",
  NavInput_v3ClassProps
>;

export const NavInput_v3 = class extends BaseNoiz<
  NavInput_v3Data,
  NavInput_v3ClassBooleans
> {
  // constructor(props: TextInputProps);
  constructor(props: NavInput_v3ClassProps) {
    super(props);
  }
  KeyValue = (props: NavInput_v3Props) => {
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
  Text = (props: NavInput_v3Props) => {
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
  Icon = (props: NavInput_v3Props) => {
    const {
      inputId,
      inputName,
      checked,
      className,
      Icon,
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
            <IconComponent datas={...Icon} />
          </div>
          <p>{inputId.toLocaleUpperCase()}</p>
        </label>
      </>
    );
  };

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

  Style = this.mapperBuilder();

  Mapper = BaseNoiz.mapperFactory(this.Style);

  render() {
    return (
      <this.Mapper datas={this.props.datas}></this.Mapper>
    );
  }
};
