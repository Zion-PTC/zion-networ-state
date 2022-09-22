import { Theme } from "./Types/theme";

export type BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type Temporary = Pick<
  Theme,
  "body" | "textColor" | "backgroundColor" | "borderColor"
>;
