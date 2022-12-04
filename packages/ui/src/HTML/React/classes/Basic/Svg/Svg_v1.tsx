import styled from "styled-components";

export interface Svg_v1Props extends BaseNoizProps {
  layout?: LayoutTypes;
  style?: StyleTypes;
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
}
export class Svg_v1Props extends BaseNoizProps {}

export interface Svg_v1State {}
export class Svg_v1State {}

enum Layouts {
  Svg24 = "Svg24",
  Svg51 = "Svg51",
}
type LayoutTypes = keyof typeof Layouts;

class SvgLayouts extends BaseNoizLayout<
  LayoutTypes,
  Svg_v1Props
> {}

enum Styles {
  defaultStyle = "defaultStyle",
}
type StyleTypes = keyof typeof Styles;
class SvgStyles extends BaseNoizStyledLayout<
  StyleTypes,
  Svg_v1Props
> {}
const Svg24 = new SvgLayouts();
Svg24.name = Layouts.Svg24;
Svg24.component = (props: Svg_v1Props) => (
  <svg
    className={props.className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    {props.children}
  </svg>
);

const Svg51 = new SvgLayouts();
Svg51.name = Layouts.Svg51;
Svg51.component = (props: Svg_v1Props) => (
  <svg
    className={props.className}
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
  >
    {props.children}
  </svg>
);

export interface Svg_v1
  extends BaseNoiz<
    Svg_v1Props,
    Svg_v1State,
    SvgLayouts,
    SvgStyles
  > {}
export class Svg_v1 extends BaseNoiz<
  Svg_v1Props,
  Svg_v1State,
  SvgLayouts,
  SvgStyles
> {
  layouts = [Svg24, Svg51];

  defaultStyle = styled(this.chooseLayout())`
    // #10 aggiungere qui
    path {
      fill: ${props => {
        console.log(
          props.filled
            ? props.secondary
              ? props.theme.secondary.borderColor
              : props.theme.primary.borderColor
            : ""
        );
        return props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : "";
      }};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
    circle {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
  `;

  styledlayouts = [
    new SvgStyles({
      name: Styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  render() {
    this.chooseLayout();
    let Element = this.chooseStyle();
    return (
      <Element
        filled={this.props.filled}
        stroked={this.props.stroked}
        secondary={this.props.secondary}
      >
        {this.props.children}
      </Element>
    );
  }
}
