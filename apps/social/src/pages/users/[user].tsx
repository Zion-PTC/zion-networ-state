import React from "react";
import Layout from "../../components/layout";

export function getStaticPaths() {
  const paths = [
    { params: { user: "ari" } },
    { params: { user: "giac" } },
    { params: { user: "newuser" } },
    { params: { user: "pol" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props: { params: { user: string } }) {
  const response = await fetch("http://localhost:3000/api/users");
  const body = await response.json();

  return {
    props: {
      userData: body[props.params.user],
    },
  };
}

export default function User(props: {
  userData: { nome: string; cognome: string };
}) {
  return (
    <Layout>
      <h1>User</h1>
      <div>{props.userData.nome}</div>
      <div>{props.userData.cognome}</div>
    </Layout>
  );
}
