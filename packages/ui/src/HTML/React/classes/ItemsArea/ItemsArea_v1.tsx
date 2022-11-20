import { RefObject } from "react";
import styled from "styled-components";
import { useCalculateFluidGrid } from "../../lib/hooks";

/////// TYPES
export type ItemsArea_v1Data = {
  height: number;
  avatarSize: number;
  ref?: RefObject<HTMLDivElement>;
};

export type ItemsArea_v1Booleans = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type ItemsArea_v1Props = NoizProps<
  ItemsArea_v1Data &
    ItemsArea_v1Booleans &
    ItemsArea_v1ClassState
>;

export type ItemsArea_v1ClassBooleans = {};

export type ItemsArea_v1ClassState = {
  blockSize?: number;
  itemsArea?: RefObject<HTMLDivElement>;
  width?: number;
  columns?: number;
};

export type ItemsArea_v1ClassProps = utility.Flatten<
  NoizDatas<ItemsArea_v1Props> & ItemsArea_v1ClassBooleans
>;

export type ItemsArea_v1AsChild = MakeAsChild<
  "ItemsArea",
  ItemsArea_v1ClassProps
>;
/////////////

////////CLASS
export class ItemsArea_v1 extends BaseNoiz<
  ItemsArea_v1Data & ItemsArea_v1Booleans,
  ItemsArea_v1ClassBooleans,
  ItemsArea_v1ClassState
> {
  constructor(props: ItemsArea_v1ClassProps) {
    super(props);
    const [blockSize, width, itemsArea, columns] =
      useCalculateFluidGrid();

    this.state = { blockSize, width, itemsArea, columns };
  }
  Html = (props: ItemsArea_v1Props) => {
    return (
      <div ref={this.state.itemsArea}>
        {props.children}
      </div>
    );
  };

  Style = styled(this.Html)`
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

  Mapper = ItemsArea_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
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

  ItemsArea_v1(props: ItemsArea_v1Props) {
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
