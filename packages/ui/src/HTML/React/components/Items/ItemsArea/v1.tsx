import { PropsWithChildren } from "react";
import { useCalculateFluidGrid } from "../../../lib/hooks/useCalculateFluidGrid";
import { Area } from "../../../style";

export type ItemsAreaDatas = {
  name: string;
};

export type ItemsAreaCss = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type ToEdit = ItemsAreaDatas & ItemsAreaCss;
export type Theme = { theme: FluidTheme };
export type FromLibrary = FluidStyled & Theme;

export type ItemsAreaProps = ToEdit & FromLibrary;

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
