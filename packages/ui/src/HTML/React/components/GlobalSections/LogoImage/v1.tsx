import styled from "styled-components";
import { sixty } from "../../../style/common/position";
import { LogoImageProps } from "../LogoImage";

export const LogoImageData = (props: LogoImageProps) => {
  return (
    <div className={props.className} css={props.css}>
      <div />
    </div>
  );
};

export const LogoImage_v2 = styled(LogoImageData)`
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  div {
    ${sixty}
    border-radius: 100%;
    border: 0.05rem solid;
    background-color: transparent;
    border-radius: 100%;
  }
`;
