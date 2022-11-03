import { Circle, areas } from "../../style";
const { Area3 } = areas;

export type LogoImageProps = CssStyled & StyledDefault;

export const LogoImage_v1 = (props: LogoImageProps) => {
  return (
    <Area3 className={props.className} css={props.css}>
      <Circle logoImage />
    </Area3>
  );
};

export const LogoImage = LogoImage_v1;
