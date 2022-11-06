import { Palette } from "../../Palette";

export class PrimaryColors_v1 extends Palette {}
export class SecondaryColors_v1 extends Palette {}
export class TertiaryColors_v1 extends Palette {}

export class ColorWheel_v1 {
  constructor(
    public primary: PrimaryColors_v1,
    public secondary: SecondaryColors_v1,
    public tertiary: TertiaryColors_v1
  ) {}
}
