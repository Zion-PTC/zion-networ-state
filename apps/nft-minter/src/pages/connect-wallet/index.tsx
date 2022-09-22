import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

export default function ConnectWallet() {
  return (
    <Layout>
      <h1>Wallet Connection</h1>
      <p>please confirm the connection with your wallet</p>
      <Link href="/collection">Collection</Link>
    </Layout>
  );
}
