import Link from "next/link";
import React from "react";
import Layout from "../../../components/layout";

export default function Login() {
  return (
    <Layout>
      <h1>Login</h1>
      <label>Username</label>
      <input type="text" />
      <br />
      <label>Password</label>
      <input type="text" />
      <br />
      <Link href="/feed/giac">giac</Link>
      <br />
      <Link href="/feed/ari">ari</Link>
    </Layout>
  );
}
