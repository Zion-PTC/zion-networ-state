import styled from "styled-components";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Tooltip, Legend } from "chart.js";
import { Bar, Bubble } from "react-chartjs-2";
import { Chart as ChartJs } from "react-chartjs-2";
import { ChartProps, Doughnut } from "react-chartjs-2";
import { Line, Pie } from "react-chartjs-2";
import { PolarArea, Radar } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";
import {
  GComponent,
  StyledGComponent,
} from "../../lib/global/BaseNoiz/BaseNoiz_v3";

export interface Chart_v2Props
  extends BaseNoizProps,
    ChartProps {
  pie?: boolean;
  donut?: boolean;
  bar?: boolean;
  bubble?: boolean;
  chart?: boolean;
}

export class Chart_v2Props extends BaseNoizProps {
  constructor(props: Chart_v2Props) {
    super(props);
    this.pie = props.pie;
    this.donut = props.donut;
    this.bar = props.bar;
    this.bubble = props.bubble;
    this.chart = props.chart;
  }
}
export interface Chart_v2State {}

export interface Chart_v2
  extends BaseNoiz<Chart_v2Props, Chart_v2State> {
  Html: GComponent<Chart_v2Props>;
  StyledHtml: StyledGComponent<Chart_v2Props>;
}

export class Chart_v2 extends BaseNoiz<
  Chart_v2Props,
  Chart_v2State
> {
  Bar = Bar;
  Bubble = Bubble;
  ChartJS = ChartJs;
  Doughnut = Doughnut;
  Line = Line;
  Pie = Pie;
  PolarArea = PolarArea;
  Radar = Radar;
  Scatter = Scatter;

  constructor(props: Chart_v2Props) {
    super(props);
    ChartJS.register(ArcElement, Tooltip, Legend);
  }

  Html = (props: Chart_v2Props) => {
    let Chart: (props: any) => JSX.Element;
    Chart = this.Doughnut;
    return (
      <div className={props.className}>
        <Chart data={props.data} options={props.options} />
      </div>
    );
  };

  StyledHtml: StyledGComponent<Chart_v2Props> = styled(
    this.Html
  )`
    width: 23em;
    height: 23em;
    place-self: center;
    ${(props: { dynamic: any }) => props.dynamic};
  `;

  render() {
    let Element = this.StyledHtml;
    return (
      <Element
        data={this.props.data}
        type={this.props.type}
      ></Element>
    );
  }
}
