import styled from "styled-components";
import { PropsWithChildren } from "react";

type Description_v2Datas = {
  text: string;
};

type Description_v2Css = {};

type ToEdit = Description_v2Datas & Description_v2Css;
type FromLibrary = FluidStyled;

export type Description_v2Props = ToEdit & FromLibrary;

export const DescriptionData_v2 = (
  props: PropsWithChildren<Description_v2Props>
) => {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
};

export const Description_v2 = styled(DescriptionData_v2)`
  height: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
`;
