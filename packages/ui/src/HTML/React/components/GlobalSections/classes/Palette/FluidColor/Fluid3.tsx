import { colors_, Palette } from "../../Palette";

export type Fluid3 = Pick<
  colors_,
  "orange" | "blue" | "blue_green" | "green" | "red"
>;

export class FluidColor_type3
  extends Palette
  implements Fluid3
{
  constructor(
    public orange: string,
    public blue: string,
    public blue_green: string,
    public green: string,
    public red: string
  ) {
    super();
  }
}
