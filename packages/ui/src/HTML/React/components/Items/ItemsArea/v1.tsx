import { PropsWithChildren, RefObject } from "react";
import styled from "styled-components";
import { useCalculateFluidGrid } from "../../../lib/hooks/useCalculateFluidGrid";

type ItemsAreaDatas = {
  height: number;
  avatarSize: number;
  ref?: RefObject<HTMLDivElement>;
};

type ItemsAreaCss = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = ItemsAreaDatas & ItemsAreaCss;

type FromLibrary = StyledCss;

export type ItemsAreaProps = ToEdit & FromLibrary;

const Area = styled.div<any>`
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

export function ItemsArea_v1(
  props: PropsWithChildren<ItemsAreaProps>
) {
  const [blockSize, width, itemsArea, columns] =
    useCalculateFluidGrid();

  return (
    <Area
      ref={itemsArea}
      blockSize={blockSize}
      columns={columns}
      width={width}
    >
      {props.children}
    </Area>
  );
}
