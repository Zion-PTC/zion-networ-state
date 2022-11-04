import { PropsWithChildren, RefObject } from "react";
import styled from "styled-components";
import { useCalculateFluidGrid } from "../../../lib/hooks/useCalculateFluidGrid";
import { AreaStyle } from "../../../style";

type ItemsAreaDatas = AreaStyle;

type ItemsAreaCss = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = ItemsAreaDatas & ItemsAreaCss;
type Theme = { theme: FluidTheme };
type FromLibrary = FluidStyled & Theme;

type ItemsAreaProps = ToEdit & FromLibrary;

const Div = styled("div").withConfig({
  shouldForwardProp: prop => !["blockSize"].includes(prop),
})<AreaStyle>``;

export function ItemsAreaData(
  props: PropsWithChildren<ItemsAreaProps>
) {
  const [blockSize, width, itemsArea, columns] =
    useCalculateFluidGrid();
  return (
    <Div
      ref={itemsArea as RefObject<HTMLDivElement>}
      blockSize={blockSize as number}
      columns={columns as number}
      width={width as number}
      className={props.className}
      css={props.css}
    >
      {props.children}
    </Div>
  );
}

export const ItemsArea_v2 = styled(ItemsAreaData)`
  display: grid;
  place-items: center;
  height: 100%;
  overflow: auto;
  width: ${props => {
    return props.width;
  }}px;
  grid-auto-rows: ${props => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${props => props.columns},
    ${props => props.blockSize + "px"}
  );
`;
