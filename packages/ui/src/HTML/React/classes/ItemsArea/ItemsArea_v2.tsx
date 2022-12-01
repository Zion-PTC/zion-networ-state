import { RefObject } from "react";
import styled from "styled-components";
import { useCalculateFluidGrid } from "../../lib/hooks";

export interface ItemsArea_v2PropsType {
  height: number;
  avatarSize: number;
  ref?: RefObject<HTMLDivElement>;
}

export interface ItemsArea_v2Props
  extends BuildProps<ItemsArea_v2PropsType>,
    BaseNoizProps {}

export class ItemsArea_v2Props extends BaseNoizProps {
  constructor(props: BuildProps<ItemsArea_v2PropsType>) {
    super(props);
    this.datas = props.datas;
  }
}
export interface ItemsArea_v2State {
  blockSize?: number;
  itemsArea?: RefObject<HTMLDivElement>;
  width?: number;
  columns?: number;
}

export interface ItemsArea_v2
  extends BaseNoiz<ItemsArea_v2Props, ItemsArea_v2State> {}

export class ItemsArea_v2 extends BaseNoiz<
  ItemsArea_v2Props,
  ItemsArea_v2State
> {
  constructor(props: ItemsArea_v2Props) {
    super(props);
    const [blockSize, width, itemsArea, columns] =
      useCalculateFluidGrid();

    this.state = { blockSize, width, itemsArea, columns };
  }

  Html = (props: ItemsArea_v2Props) => {
    return (
      <div ref={this.state.itemsArea}>
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
    let Element = this.makeElement();
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
    const [blockSize, width, itemsArea, columns] =
      useCalculateFluidGrid();

    return (
      <this.Area
        ref={itemsArea}
        blockSize={blockSize}
        columns={columns}
        width={width}
      >
        {props.children}
      </this.Area>
    );
  }
}
