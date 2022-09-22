import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

export default function Mint() {
  return (
    <Layout>
      <h1>Mint</h1>
      <Link href="/success">Confirm</Link>
      <br />
      <Link href="/failure">Fail</Link>
    </Layout>
  );
}
