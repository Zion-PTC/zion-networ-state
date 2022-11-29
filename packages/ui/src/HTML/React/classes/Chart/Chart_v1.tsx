import styled from "styled-components";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Tooltip, Legend } from "chart.js";
import { Bar, Bubble } from "react-chartjs-2";
import { Chart as ChartJs } from "react-chartjs-2";
import { ChartProps, Doughnut } from "react-chartjs-2";
import { Line, Pie } from "react-chartjs-2";
import { PolarArea, Radar } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";
// TODO capire se si puo fare uso di queste funzioni.
// import { getDatasetAtEvent } from "react-chartjs-2";
// import { getElementAtEvent } from "react-chartjs-2";
// import { getElementsAtEvent } from "react-chartjs-2";

import { MakeAsChild, NoizDatas } from "../../lib/types";
import { NoizProps } from "../../lib/types";
import { Flatten } from "../../lib/utility";

/////// TYPES
export type Chart_v1Data = {};

export type Chart_v1Booleans = {
  pie?: boolean;
  donut?: boolean;
  bar?: boolean;
  bubble?: boolean;
  chart?: boolean;
};

export type Chart_v1Props = NoizProps<
  Chart_v1Data & Chart_v1Booleans & ChartProps
>;

export type Chart_v1ClassBooleans = {};

export type Chart_v1ClassProps = Flatten<
  NoizDatas<Chart_v1Props> & Chart_v1ClassBooleans
>;

export type Chart_v1AsChild = MakeAsChild<
  "Chart",
  Chart_v1ClassProps
>;
/////////////

////////CLASS
export class Chart_v1 extends BaseNoiz<
  Chart_v1Data & Chart_v1Booleans & ChartProps,
  Chart_v1ClassBooleans
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

  constructor(props: Chart_v1ClassProps) {
    super(props);
    // TODO @ariannatnl creare switch per cambiare il tipo di chart in
    // base alle props
    // per iniziare ad usare il componente CharJs bisogna
    // registrarlo
    // in effetti potremmo anche noi estendere questa
    // funzione e far registrare il tipo di chart prima di
    // metterlo nel render.
    ChartJS.register(ArcElement, Tooltip, Legend);
  }
  Html = (props: Chart_v1Props) => {
    let Chart: (props: any) => JSX.Element;
    Chart = this.Doughnut;
    return (
      <div className={props.className}>
        <Chart data={props.data} options={props.options} />
      </div>
    );
  };

  Style = styled(this.Html)`
    width: 23em;
    height: 23em;
    place-self: center;
    ${(props: { dynamic: any }) => props.dynamic};
  `;

  Mapper = Chart_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
