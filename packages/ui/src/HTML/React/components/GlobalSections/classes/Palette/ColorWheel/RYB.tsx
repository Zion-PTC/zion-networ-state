import {
  PrimaryColors,
  SecondaryColors,
  TertiaryColors,
  ColorWheel,
} from "..";

export class RYBPrimary extends PrimaryColors {
  constructor(
    public red: string,
    public yellow: string,
    public blue: string
  ) {
    super();
  }
}

export class RYBSecondary extends SecondaryColors {
  constructor(
    public orange: string,
    public green: string,
    public purple: string
  ) {
    super();
  }
}
export class RYBTertiary extends TertiaryColors {
  constructor(
    public red_orange: string,
    public yellow_orange: string,
    public yellow_green: string,
    public blue_green: string,
    public blue_purple: string,
    public red_purple: string
  ) {
    super();
  }
}

export class RYB extends ColorWheel {
  constructor(
    public red: string,
    public red_orange: string,
    public orange: string,
    public yellow_orange: string,
    public yellow: string,
    public yellow_green: string,
    public green: string,
    public blue_green: string,
    public blue: string,
    public blue_purple: string,
    public purple: string,
    public red_purple: string
  ) {
    super(
      new RYBPrimary(red, yellow, blue),
      new RYBSecondary(orange, green, purple),
      new RYBTertiary(
        red_orange,
        yellow_orange,
        yellow_green,
        blue_green,
        blue_purple,
        red_purple
      )
    );
  }
}
