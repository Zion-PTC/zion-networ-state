// @ts-nocheck

export interface _variable_Props extends BaseNoizProps {}

export class _variable_Props extends BaseNoizProps {
  constructor(props: _variable_Props) {
    super(props);
    this.name = props.name;
  }
}

export interface _variable_State {}

export class _variable_State {}

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
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
