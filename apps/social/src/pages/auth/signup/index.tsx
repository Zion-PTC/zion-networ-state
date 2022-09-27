import Link from "next/link";
import React from "react";
import Layout from "../../../components/layout";

export default function Singup() {
  return (
    <Layout>
      <h1>Registration</h1>
      <label>Username</label>
      <input type="text" />
      <br />
      <label>Password</label>
      <input type="text" />
      <br />
      <Link href="/feed/newuser">newuser</Link>
    </Layout>
  );
}
