import { Palette } from "../Palette";

export class PrimaryColors extends Palette {}
export class SecondaryColors extends Palette {}
export class TertiaryColors extends Palette {}

export class ColorWheel {
  constructor(
    public primary: PrimaryColors,
    public secondary: SecondaryColors,
    public tertiary: TertiaryColors
  ) {}
}
