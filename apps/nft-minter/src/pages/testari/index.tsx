import React from "react";
import Layout from "../../components/layout";
import LoadingPage from "../../components/LoadingPage";

export default function testari(props) {
  return (
    <Layout {...props.layout}>
      <LoadingPage></LoadingPage>
    </Layout>
  );
}
