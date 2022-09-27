import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import {
  ProductData,
  ProductDatas,
  ServiceDatas,
  UserData,
} from "../api/types";

const Pi = (props: {
  data: ProductData;
  product?: boolean;
  service?: boolean;
}) => {
  let url = "";
  if (props.product) url = "/products/";
  if (props.service) url = "/services/";
  return (
    <>
      <span>
        <p key={props.data.title}>
          Title:{" "}
          <Link href={`${url}${props.data.title}`}>{props.data.title}</Link>{" "}
        </p>
      </span>
    </>
  );
};

const Pis = (props: {
  datas: ProductDatas;
  product?: boolean;
  service?: boolean;
}): JSX.Element => {
  const elements: JSX.Element[] = [];

  for (let key in props.datas) {
    elements.push(
      <Pi
        data={props.datas[key]}
        product={props.product ? true : false}
        service={props.service ? true : false}
      />
    );
  }
  return <>{elements}</>;
};

export async function getStaticPaths() {
  const usersResponse = await fetch("http://localhost:3000/api/users");
  const users = await usersResponse.json();
  let paths = [];
  for (let user in users) {
    paths.push({ params: { user } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props: { params: { user: string } }) {
  const usersResponse = await fetch("http://localhost:3000/api/users");
  const body = await usersResponse.json();
  const userData = body[props.params.user];

  const productsResponse = await fetch("http://localhost:3000/api/products");
  const products = await productsResponse.json();
  const productsDatas = products;

  const servicesResponse = await fetch("http://localhost:3000/api/services");
  const services = await servicesResponse.json();
  const servicesDatas = services;

  return {
    props: {
      userData,
      productsDatas,
      servicesDatas,
    },
  };
}

export default function Feed(props: {
  userData: UserData;
  productsDatas: ProductDatas;
  servicesDatas: ServiceDatas;
}) {
  return (
    <Layout feed>
      <h1>Feed of: {props.userData.nome}</h1>
      <Pis datas={props.productsDatas} product></Pis>
      <Pis datas={props.servicesDatas} service></Pis>
    </Layout>
  );
}
