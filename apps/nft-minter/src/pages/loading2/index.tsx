import React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../../components/layout";
import LoadingWaves from "../../components/loading";

export default function Loading2(props) {
  return (
    <Layout {...props.layout}>
      <h1>Loading</h1>
      <LoadingWaves />
    </Layout>
  );
}
