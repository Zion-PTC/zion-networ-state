// import original module declarations
import "styled-components";
import { Theme } from "./components/GlobalSections/Types";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
x;
