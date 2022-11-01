import { Circle2, areas } from "../../style";
const { Area3 } = areas;

export const LogoImage = (props: areas.LogoImageProps) => {
  return (
    <Area3 className={props.className} css={props.css}>
      <Circle2 />
    </Area3>
  );
};
