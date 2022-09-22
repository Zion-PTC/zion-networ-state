import styled from "styled-components";
import { TextArea } from "./TextArea";
import { InfosProps } from "./types";

const Area = styled.div`
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  grid-template-columns: 3px 1fr 5fr 1fr;
  grid-template-rows: 1fr 0.7fr;
  grid-template-areas:
    ". main main ."
    ". . secondary .";
  align-items: center;
  a {
    margin: 0;
    padding: 0;
    margin: 0;
  }
`;

export const Infos = (props: InfosProps) => {
  // TODO aggiungto cosi
  props;
  return (
    <Area>
      <TextArea gridArea="main"></TextArea>
      <TextArea gridArea="secondary"></TextArea>
    </Area>
  );
};
