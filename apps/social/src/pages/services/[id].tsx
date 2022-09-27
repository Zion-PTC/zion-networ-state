import React from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { ProductDatas, ServiceData, ServiceDatas } from "../api/types";

const URL = "http://localhost:3000/api/services";

export async function getStaticPaths() {
  const response = await fetch(URL);
  const body: ProductDatas = await response.json();
  let paths = [];
  for (let key in body) {
    paths.push({ params: { id: key } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props: { params: { id: string } }) {
  const servicesResponse = await fetch(URL);
  const services: ServiceDatas = await servicesResponse.json();
  const servicesDatas = services;

  return {
    props: { serviceData: servicesDatas[props.params.id] },
  };
}

export default function Service(props: { serviceData: ServiceData }) {
  const router = useRouter();
  return (
    <Layout service>
      <h1>Service</h1>
      <p>Title: {props.serviceData.title}</p>
      <p>Descrizione: {props.serviceData.descrizione}</p>
      <p>Tipo: {props.serviceData.type}</p>
    </Layout>
  );
}
