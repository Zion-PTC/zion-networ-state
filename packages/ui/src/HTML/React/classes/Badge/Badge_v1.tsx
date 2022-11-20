import styled, { css } from "styled-components";
import { Icon } from "../Icon";

/////// TYPES
export type Badge_v1Data = {};

export type Badge_v1Booleans = {
  size?: "small" | "mid" | "big";
};

export type Badge_v1Props = NoizProps<
  Badge_v1Data & Badge_v1Booleans
>;

export type Badge_v1ClassBooleans = {};

export type Badge_v1ClassProps = utility.Flatten<
  NoizDatas<Badge_v1Props> & Badge_v1ClassBooleans
>;

export type Badge_v1AsChild = MakeAsChild<
  "Badge",
  Badge_v1ClassProps
>;
/////////////

////////CLASS
export class Badge_v1 extends BaseNoiz<
  Badge_v1Data & Badge_v1Booleans,
  Badge_v1ClassBooleans
> {
  constructor(props: Badge_v1ClassProps) {
    super(props);
  }
  Html = (props: Badge_v1Props) => {
    return (
      <div className={props.className}>
        <div id="logo">
          <div id="badge-circle">
            <Icon datas={[]}></Icon>
          </div>
        </div>
        <div id="badge-infos">
          <p>ZION 2</p>
          <h3>SILVER</h3>
        </div>
      </div>
    );
  };

  calculateSize = (ratio: number, height: number) => {
    const width = height * ratio;
    return css`
      width: ${width.toString()}rem;
      height: ${height.toString()}rem;
    `;
  };

  width = 20;
  height = 6;
  ratio = this.width / this.height;

  smallSize = this.calculateSize(this.ratio, 3);
  midSize = this.calculateSize(this.ratio, 4);
  bigSize = this.calculateSize(this.ratio, 5);

  defaultSize = css`
    width: 100%;
    height: 100%;
  `;

  checkSize = (props?: Badge_v1Props) => {
    if (!props) return;
    if (!props.size) return this.defaultSize;
    if (props.size === "small") return this.smallSize;
    if (props.size === "mid") return this.midSize;
    if (props.size === "big") return this.bigSize;
  };

  Style = styled(this.Html)`
    display: grid;
    ${props => this.checkSize(props)}
    grid-template-columns: 10% 23% 57% 10%;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas:
      ". . . ."
      ". logo infos ."
      ". . . .";
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: #e5e5e5;
    border-radius: 4px;
    place-items: center;
    #logo {
      grid-area: logo;
      width: 100%;
      height: 100%;
      #badge-circle {
        border-radius: 100%;

        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        border: 2px solid
          ${props => props.theme.palette.grey};
        background-color: darkgrey;
        box-sizing: border-box;
      }
    }
    #badge-infos {
      grid-area: infos;
      text-align: center;
      color: ${props => props.theme.palette.grey};
      h3 {
        margin: 0;
      }
    }
  `;

  Mapper = Badge_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
