import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const Table = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  height: 90%;
  width: 90%;
  place-self: center;
`;
const Row = styled.div`
  display: table-cell;
  border: 1px solid red;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
`;
const CellH = styled.div``;
const CellM = styled.div``;
const CellF = styled.div``;

export default function testari(props) {
  return (
    <Layout {...props.layout}>
      <Table>
        <Row>
          <CellH>HEADER</CellH>
        </Row>
        <Row>
          <CellM>
            <div>lol</div>
          </CellM>
        </Row>
        <Row>
          <CellF>FOOTER</CellF>
        </Row>
      </Table>
    </Layout>
  );
}
