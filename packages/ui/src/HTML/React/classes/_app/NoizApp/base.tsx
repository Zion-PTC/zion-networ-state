import styled from "styled-components";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface _variable_Props
  extends BaseNoizProps<layoutTypes, styleTypes> {}

export class _variable_Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface _variable_State
  extends BaseNoizState<_variable_Props> {}

export class _variable_State extends BaseNoizState<_variable_Props> {}

export interface _variable_
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    _variable_Props,
    _variable_State
  > {}

export class _variable_ extends BaseNoiz<
  layoutTypes,
  styleTypes,
  _variable_Props,
  _variable_State
> {
  main = (props: _variable_Props) => {
    return <h1>{props.children}</h1>;
  };
  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];
  defaultStyle = styled(this.Html)``;
  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
  render() {
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
