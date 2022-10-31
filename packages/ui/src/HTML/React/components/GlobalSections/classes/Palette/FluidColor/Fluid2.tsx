import { colors_, Palette } from "../../Palette";

export type Fluid2 = Pick<
  colors_,
  "blue" | "purple" | "red_purple" | "green" | "blue_green"
>;

export class FluidColor_type2
  extends Palette
  implements Fluid2
{
  constructor(
    public blue: string,
    public purple: string,
    public red_purple: string,
    public green: string,
    public blue_green: string
  ) {
    super();
  }
}
