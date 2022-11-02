import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const Rosso = styled.div`
  background-color: red;
  height: 10rem;
`;

function Citta(props) {
  return <div className={props.className}></div>;
}

const Germ = styled(Rosso)``;

const Fatto = styled(Germ)``;

export default function index(props: {
  className?: string;
  layout: any;
}) {
  return (
    <Layout {...props.layout}>
      <Fatto />
    </Layout>
  );
}
