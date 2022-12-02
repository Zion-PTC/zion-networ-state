import { createRef, RefObject } from "react";
import styled from "styled-components";

interface ParentSize {
  width?: number;
  height?: number;
}
class ParentSize {}

export interface ItemsArea_v2Props extends BaseNoizProps {
  height: number;
  avatarSize: number;
  ref?: RefObject<HTMLDivElement>;
}

export class ItemsArea_v2Props extends BaseNoizProps {
  constructor(props: ItemsArea_v2Props) {
    super(props);
    // TODO @ariannatnl aggiungere props al costruttore
  }
}
export interface ItemsArea_v2State {
  blockSize?: number;
  width?: number;
  columns?: number;
}

export class ItemsArea_v2State {}

export interface ItemsArea_v2
  extends BaseNoiz<ItemsArea_v2Props, ItemsArea_v2State> {
  itemsArea: RefObject<HTMLDivElement>;
}

export class ItemsArea_v2 extends BaseNoiz<
  ItemsArea_v2Props,
  ItemsArea_v2State
> {
  ParentSize = ParentSize;
  rows = 14;
  columns = 8;
  setBlockSize = (blocksize: number) =>
    this.setState({ blockSize: blocksize });
  setWidth = (width: number) =>
    this.setState({ width: width });
  calculateFluidGrid() {
    if (!this.itemsArea.current) return;
    const itemsArea = this.itemsArea.current;
    const parent_ = itemsArea.parentElement;
    if (!parent_) return;
    const clientRec = parent_.getBoundingClientRect();
    if (!clientRec.height) return;
    if (!clientRec.width) return;
    const parentSize = new this.ParentSize();
    parentSize.width = clientRec.height;
    parentSize.height = clientRec.width;
    if (!parentSize.height) return;
    if (parentSize.height === 0) return;
    const SCALE = 1000000000000;
    const ratio = this.calculateRatio(parentSize.height);
    const blockSize = this.scale(ratio, SCALE);
    this.setBlockSize(blockSize);
    const width = blockSize * this.columns;
    this.setWidth(width);
  }

  calculateRatio(height: number) {
    return height / this.rows;
  }

  scale(num: number, scale: number) {
    return Math.round(num * scale) / scale;
  }

  constructor(props: ItemsArea_v2Props) {
    super(props);
    this.itemsArea = createRef();
    let state = new ItemsArea_v2State();
    state.blockSize = 0;
    state.width = 0;
    state.columns = this.columns;
    this.state = state;
  }

  componentDidMount() {
    this.calculateFluidGrid();
  }

  Html = (props: ItemsArea_v2Props) => {
    return (
      <div
        ref={this.itemsArea}
        className={props.className}
      >
        {props.children}
      </div>
    );
  };

  StyledHtml = styled(this.Html)`
    display: grid;
    grid-area: content;
    height: 100%;
    overflow: auto;
    width: ${() => this.state.width}px;
    grid-auto-rows: ${() => this.state.blockSize + "px"};
    grid-template-columns: repeat(
      ${() => this.state.columns},
      ${() => this.state.blockSize + "px"}
    );
    place-self: center;
  `;

  render() {
    let Element = this.StyledHtml;
    console.log(this.state);

    return <Element {...this.props}></Element>;
  }
  ///////// OLD
  Area = styled.div<any>`
    display: grid;
    grid-area: content;
    height: 100%;
    overflow: auto;
    width: ${props => props.width}px;
    grid-auto-rows: ${props => props.blockSize + "px"};
    grid-template-columns: repeat(
      ${props => props.columns},
      ${props => props.blockSize + "px"}
    );
    place-self: center;
  `;

  ItemsArea_v1(props: ItemsArea_v2Props) {
    return (
      <this.Area
        ref={this.itemsArea}
        blockSize={this.state.blockSize}
        columns={this.state.columns}
        width={this.state.width}
      >
        {props.children}
      </this.Area>
    );
  }
}
