import { css } from "styled-components";
import { Palette } from "./classes/";
import {
  cym,
  rgb,
  RGB,
  RYB,
} from "./classes/Palette/ColorWheel/";
import {
  FluidColor_type1,
  FluidColor_type2,
  FluidColor_type3,
} from "./classes/FluidColor";

export class Google extends Palette {
  blue = "hsl(217, 89%, 61%)";
  yellow = "hsl(45, 97%, 50%)";
  green = "	hsl(136, 53%, 43%)";
  red = "hsl(4, 81.1658%, 56.2745%)";
}

export class Twitter extends Palette {
  blue = "hsl(206, 82%, 63%)";
  black = "hsl(204, 11%, 18%)";
  grey = "	hsl(204, 11%, 45%)";
  lightGrey = "hsl(205, 20%, 83%)";
  dirtyWHite = "hsl(205, 25%, 91%)";
  white = "hsl(0, 0%, 100%)";
}

export class Facebook extends Palette {
  blue = "hsl(221, 44%, 41%)";
  darkGrey = "hsl(221, 32%, 65%)";
  lightGrey = "hsl(224, 31%, 90%)";
  dirtyWhite = "	hsl(0, 0%, 97%)";
  white = "hsl(0, 0%, 100%)";
}

export class MicroSoft extends Palette {
  orange = "	hsl(17, 93%, 52%)";
  green = "	hsl(80, 100%, 37%)";
  blue = "hsl(200, 100%, 47%)";
  yellow = "#hsl(44, 100%, 50%)";
}

export class Intel extends Palette {
  blue = "	hsl(203, 86%, 41%)";
}

export class Instagram extends Palette {
  blue = "	hsl(207, 42%, 43%)";
}

export class IBM extends Palette {
  blue = "	hsl(200, 100%, 30%)";
}

export class Yahoo extends Palette {
  purple = "hsl(288, 100%, 30%)";
}

export class Amazon extends Palette {
  orange = "hsl(36, 100%, 50%)";
  blue = "hsl(206, 80%, 39%)";
}

export class Netflix extends Palette {
  black = "hsl(0, 5%, 13%)";
  red = "hsl(357, 92%, 47%)";
  white = "hsl(60, 17%, 95%)";
}

export class CocaCola extends Palette {
  red = "		hsl(2, 86%, 51%)";
}

export class Pepsi extends Palette {
  red = "	hsl(356, 77%, 53%)";
  blue = "hsl(207, 100%, 26%)";
}

export class Ikea extends Palette {
  yellow = "hsl(48, 100%, 50%)";
  blue = "	hsl(220, 100%, 30%)";
}

export class Android extends Palette {
  green = "	hsl(74, 55%, 50%)";
}

export let rgb_ = rgb;

export let cym_ = cym;

export let ryb = new RYB(
  "hsl(5, 99%, 53%)",
  "hsl(21, 98%, 51%)",
  "hsl(36, 98%, 50%)",
  "hsl(47, 97%, 55%)",
  "hsl(60, 99%, 60%)",
  "hsl(73, 67%, 52%)",
  "hsl(95, 56%, 44%)",
  "hsl(197, 49%, 40%)",
  "hsl(224, 99%, 50%)",
  "hsl(251, 71%, 49%)",
  "hsl(286, 99%, 35%)",
  "hsl(334, 81%, 42%)"
);

// RYB
export let fluid_1 = new RYB(
  "#FF002B",
  "#FF3B21",
  "#FF7516",
  "#FFB00B",
  "#FFEA00",
  "#CDB040",
  "#9B7580",
  "#693BC0",
  "#3700FF",
  "#6900CA",
  "#9B0095",
  "#CD0060"
);

// RGB
export let fluid_2 = new RGB(
  "#FF0015",
  "#FF800B",
  "#FFFF00",
  "#80FF04",
  "#00FF08",
  "#00FB84",
  "#00F7FF",
  "#207CFF",
  "#4000FF",
  "#A000EE",
  "#FF00DD",
  "#FF0079"
);

// RYB
export let fluid_3 = new RYB(
  "#FF1E00",
  "#FF5200",
  "#FF8800",
  "#FFBA00",
  "#FFEE00",
  "#84FF00",
  "#00FF00",
  "#00FFD4",
  "#0033FF",
  "#7300FF",
  "#FF00FF",
  "#FF0077"
);

export let fluid_4 = new RYB(
  "#FF1E00",
  "#FF5200",
  "#FF8600",
  "#FFBA00",
  "#FFEE00",
  "#C0C040",
  "#809180",
  "#4062C0",
  "#0033FF",
  "#402EC0",
  "#802980",
  "#C02440"
);

export let fluid_5 = new RYB(
  "#ED2800",
  "#EF5C08",
  "#F1900F",
  "#F3C417",
  "#F4F71E",
  "#C4C650",
  "#859582",
  "#3232E6",
  "#6364B4",
  "#6130AD",
  "#902D73",
  "#BF2B3A"
);

export let fluid_6 = new Palette();
fluid_6.red = "#613E46";
fluid_6.orange = "#AC9523";
fluid_6.yellow = "#F7EC16";
fluid_6.green = "#909648";
fluid_6.blue = "#234154";
fluid_6.purple = "#42404D";
fluid_6.black = "#11171F";
fluid_6.white = "#FFFEF7";

export let fluid_7 = new Palette();
fluid_7.red = "#C10732";
fluid_7.orange = "#DE7D55";
fluid_7.yellow = "#FAF377";
fluid_7.green = "#87A47B";
fluid_7.blue = "#13557F";
fluid_7.purple = "#6A2E59";
fluid_7.black = "#061904";
fluid_7.white = "#FFFCFF";

export let fluid_8 = new Palette();
fluid_8.red = "#590418";
fluid_8.orange = "#DEBAAB";
fluid_8.yellow = "#FAF6AA";
fluid_8.green = "#CAD6C5";
fluid_8.blue = "#0B3047";
fluid_8.purple = "#471F3C";
fluid_8.black = "#020A09";
fluid_8.white = "#FCFDFF";

export let fluid_9 = new Palette();
fluid_9.blue = "#0A0094";
fluid_9.purple = "#5C00A3";
fluid_9.red_purple = "#944665";
fluid_9.green = "#A9F56E";
fluid_9.blue_green = "#D6FFEF";

export let fluid_10 = new Palette();
fluid_10.blue = "#413B57";
fluid_10.purple = "#655473";
fluid_10.red_purple = "#826C73";
fluid_10.green = "#B1C49D";
fluid_10.blue_green = "#EDFFF8";

////////// FLUID COLORS 1
export let fluid_colors1_a = new FluidColor_type1(
  "hsl(23, 100%, 50%)",
  "hsl(203, 100%, 52.94117647058824%)",
  "hsl(168, 100%, 50%)",
  "hsl(132, 100%, 50%)",
  "hsl(312, 100%, 50%)"
);

export let fluid_colors1_b = new FluidColor_type1(
  "hsl(23, 45%, 11%)",
  "hsl(203, 78.3%, 14.5%)",
  "hsl(168, 32.2%, 37.0%)",
  "hsl(132, 30.1%, 62.9%)",
  "hsl(312, 100%, 97%)"
);

export let fluid_colors1_c = new FluidColor_type1(
  "hsl(23, 84%, 34.31372549019608%)",
  "hsl(203, 59.03614457831326%, 51.176470588235304%)",
  "hsl(168, 59.42028985507245%, 72.94117647058823%)",
  "hsl(132, 24.50331125827815%, 29.607843137254903%)",
  "hsl(312, 10.399999999999999%, 24.509803921568626%)"
);

export let fluid_colors1_d = new FluidColor_type1(
  "hsl(22, 84%, 19.607843137254903%)",
  "hsl(203, 88.03418803418803%, 22.941176470588236%)",
  "hsl(164, 95.74468085106385%, 27.64705882352941%)",
  "hsl(132, 100%, 80%)",
  "hsl(313, 100%, 90.98039215686275%)"
);

export const fluidOrange_darkest = "hsl(22, 3%, 7%)";
export const fluidOrange_dark = "hsl(22, 54%, 23%)";
export const fluidOrange = "hsl(22, 100%, 50%)";
export const fluidOrange_bright = "hsl(22, 37%, 70%)";
export const fluidOrange_brightest = "hsl(22, 100%, 98%)";

////////// FLUID COLORS 2
export let fluid_colors2_a = new FluidColor_type2(
  "hsl(244, 100%, 50%)",
  "hsl(273, 100%, 50%)",
  "hsl(336, 100%, 50%)",
  "hsl(94, 100%, 50%)",
  "hsl(156, 100%, 50%)"
);

export let fluid_colors2_b = new FluidColor_type2(
  "hsl(243, 71.05263157894736%, 14.901960784313726%)",
  "hsl(273, 100%, 50%)",
  "hsl(336, 100%, 50%)",
  "hsl(94, 100%, 50%)",
  "hsl(156, 100%, 50%)"
);

////////// FLUID COLORS 3
export let fluid_colors3_a = new FluidColor_type3(
  "hsl(29, 100%, 50%)",
  "hsl(209, 100%, 50%)",
  "hsl(192, 100%, 50%)",
  "hsl(172, 100%, 50%)",
  "hsl(352, 100%, 50%)"
);

export let fluid_colors3_b = new FluidColor_type3(
  "hsl(31, 92.06349206349206%, 49.41176470588235%)",
  "hsl(210, 100%, 25.098039215686274%)",
  "hsl(192, 98.41269841269842%, 24.705882352941174%)",
  "hsl(172, 98.52941176470588%, 26.666666666666668%)",
  "hsl(352, 100%, 27.450980392156865%)"
);

export let fluid_colors3_c = new FluidColor_type3(
  "hsl(31, 92.06349206349206%, 49.41176470588235%)",
  "hsl(209, 100%, 25.098039215686274%)",
  "hsl(184, 66.41221374045803%, 25.68627450980392%)",
  "hsl(150, 98.52941176470588%, 26.666666666666668%)",
  "hsl(330, 100%, 27.450980392156865%)"
);

export const plum = "hsl(300, 33.3333%, 37.647%)";
export const indigo = "hsl(274, 100%, 25.490%)";

export const angles = css`
  --red: #ff0000ff; // 0                      /// Red             ///// R
  --candy-apple-red: #ff1500ff;
  --scarlet: #ff2a00ff;
  --red-orange-color-wheel: #ff4000ff; // 15  /// Red_orange
  --orange-pantone: #ff5500ff;
  --safety-orange-blaze-orange: #ff6a00ff;
  --orange: #ff8000ff; // 30                  /// Orange
  --yellow-orange-color-wheel: #ff9500ff;
  --chrome-yellow: #ffaa00ff;
  --amber: #ffbf00ff; // 45                   /// yellow_orange
  --gold-web-golden: #ffd500ff;
  --middle-yellow: #ffea00ff;
  --yellow: #ffff00ff; // 60                  /// Yellow                      ///// Y
  --chartreuse-traditional: #eaff00ff;
  --arctic-lime: #d4ff00ff;
  --bitter-lime: #bfff00ff;
  --spring-bud: #aaff00ff;
  --french-lime: #95ff00ff;
  --chartreuse-web: #80ff00ff; // 90
  --bright-green: #6aff00ff;
  --harlequin: #55ff00ff;
  --harlequin-2: #40ff00ff; // 105            /// yellow_green
  --neon-green: #2aff00ff;
  --green-1: #15ff00ff;
  --green: #00ff00ff; // 120                                      ///// G
  --green-2: #00ff15ff;
  --green-3: #00ff2aff;
  --erin: #00ff40ff;
  --erin-2: #00ff55ff;
  --spring-green-1: #00ff6aff;
  --spring-green: #00ff80ff; // 150           /// Green
  --medium-spring-green: #00ff95ff;
  --medium-spring-green-2: #00ffaaff;
  --sea-green-crayola: #00ffbfff;
  --sea-green-crayola-2: #00ffd4ff;
  --turquoise-blue: #00ffeaff;
  --aqua: #00ffffff; // 180                                                   ///// C
  --electric-blue: #00eaffff;
  --vivid-sky-blue: #00d4ffff;
  --capri: #00bfffff; // 195                  /// blue_green
  --blue-jeans: #00aaffff;
  --dodger-blue: #0095ffff;
  --azure: #0080ffff; // 210
  --bluetiful: #006affff;
  --blue-ryb: #0055ffff;
  --blue-ryb-2: #0040ffff;
  --ultramarine: #002bffff;
  --blue-1: #0015ffff;
  --blue: #0000ffff; // 240                   //// Blue            ///// B
  --blue-2: #1500ffff;
  --blue-3: #2a00ffff;
  --ultramarine: #4000ffff;
  --han-purple: #5500ffff;
  --electric-indigo: #6a00ffff;
  --violet-color-wheel: #8000ffff; // 270     /// blue_purple
  --electric-violet: #9500ffff;
  --vivid-violet: #aa00ffff;
  --electric-purple: #c000ffff;
  --phlox: #d500ffff;
  --phlox-2: #ea00ffff;
  --magenta: #ff00ffff; // 300                /// purple                     ///// M
  --magenta-2: #ff00eaff;
  --hot-magenta: #ff00d4ff;
  --shocking-pink: #ff00c0ff;
  --persian-rose: #ff00aaff;
  --deep-pink: #ff0095ff;
  --rose: #ff0080ff; // 330                   /// red_purple
  --winter-sky: #ff006aff;
  --radical-red: #ff0055ff;
  --red-munsell: #ff0040ff;
  --red-pigment: #ff002bff;
  --red-2: #ff0015ff;
`;

export const exportedPalette = css`
  /* CSS HEX */
  --blue: #1100ffff;
  --electric-violet: #9000ffff;
  --paradise-pink: #ff0066ff;
  --bright-green: #6eff00ff;
  --medium-spring-green: #00ff99ff;

  /* CSS HSL */
  --blue: hsla(244, 100%, 50%, 1);
  --electric-violet: hsla(274, 100%, 50%, 1);
  --paradise-pink: hsla(336, 100%, 50%, 1);
  --bright-green: hsla(94, 100%, 50%, 1);
  --medium-spring-green: hsla(156, 100%, 50%, 1);

  /* SCSS HEX */
  $blue: #1100ffff;
  $electric-violet: #9000ffff;
  $paradise-pink: #ff0066ff;
  $bright-green: #6eff00ff;
  $medium-spring-green: #00ff99ff;

  /* SCSS HSL */
  $blue: hsla(244, 100%, 50%, 1);
  $electric-violet: hsla(274, 100%, 50%, 1);
  $paradise-pink: hsla(336, 100%, 50%, 1);
  $bright-green: hsla(94, 100%, 50%, 1);
  $medium-spring-green: hsla(156, 100%, 50%, 1);

  /* SCSS RGB */
  $blue: rgba(17, 0, 255, 1);
  $electric-violet: rgba(144, 0, 255, 1);
  $paradise-pink: rgba(255, 0, 102, 1);
  $bright-green: rgba(110, 255, 0, 1);
  $medium-spring-green: rgba(0, 255, 153, 1);

  /* SCSS Gradient */
  $gradient-top: linear-gradient(
    0deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-right: linear-gradient(
    90deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-bottom: linear-gradient(
    180deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-left: linear-gradient(
    270deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-top-right: linear-gradient(
    45deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-bottom-right: linear-gradient(
    135deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-top-left: linear-gradient(
    225deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-bottom-left: linear-gradient(
    315deg,
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
  $gradient-radial: radial-gradient(
    #1100ffff,
    #9000ffff,
    #ff0066ff,
    #6eff00ff,
    #00ff99ff
  );
`;
