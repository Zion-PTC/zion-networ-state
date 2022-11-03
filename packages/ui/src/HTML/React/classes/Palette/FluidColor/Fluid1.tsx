import { colors_, Palette } from "../../Palette";

export type Fluid1 = Pick<
  colors_,
  "orange" | "blue" | "blue_green" | "green" | "red_purple"
>;

export class FluidColor_type1
  extends Palette
  implements Fluid1
{
  constructor(
    public orange: string,
    public blue: string,
    public blue_green: string,
    public green: string,
    public red_purple: string
  ) {
    super();
  }
}
