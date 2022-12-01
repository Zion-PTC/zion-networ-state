// @ts-nocheck

export interface _variable_PropsType {
  name: string;
}

export interface _variable_Props
  extends BuildProps<_variable_PropsType>,
    BaseNoizProps {}

export class _variable_Props extends BaseNoizProps {
  constructor(props: BuildProps<_variable_PropsType>) {
    super(props);
    this.name = props.name;
    this.datas = props.datas;
  }
}
export interface _variable_State {}

export interface _variable_
  extends BaseNoiz<_variable_Props, _variable_State> {}

export class _variable_ extends BaseNoiz<
  _variable_Props,
  _variable_State
> {
  Html = (props: _variable_Props) => {
    return <h1>{props.children}</h1>;
  };
  StyledHtml = styled(this.Html)``;
  render() {
    let Element = this.makeElement();
    return <Element name=""></Element>;
  }
}
