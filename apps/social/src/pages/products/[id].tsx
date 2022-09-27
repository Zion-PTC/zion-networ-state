import React from "react";
import Layout from "../../components/layout";
import { ProductData, ProductDatas } from "../api/types";

const URL = "http://localhost:3000/api/products";

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
  const response = await fetch(URL);
  const body: ProductDatas = await response.json();
  const productsDatas = body;

  return {
    props: { productsData: productsDatas[props.params.id] },
  };
}

export default function Product(props: { productsData: ProductData }) {
  return (
    <Layout product>
      <h1>Product</h1>
      <p>Title: {props.productsData.title}</p>
      <p>Tipo: {props.productsData.type}</p>
      <div className="CardArea">
        <div className="prod-image"></div>
        <div className="social">
          <div className="like"></div>
          <div className="repost"></div>
          <div className="more"></div>
        </div>
        <section className="infos">
          <h3>Catalogue - Artist</h3>
          <p>{props.productsData.descrizione}</p>
        </section>
        <section className="creator">
          <h5 className="creator">Creator</h5>
          <div className="avatar"></div>
          <p className="royalties">Royalties</p>
          <h5 className="collection">Collection</h5>
          <div className="avatar"></div>
        </section>
        <nav>
          <section className="bids">bids</section>
          <section className="details">details</section>
          <section className="history">history</section>
        </nav>
        <div className="CardBackground">
          <div className="darkbg"></div>
          <div className="brightbg"></div>
        </div>
      </div>
    </Layout>
  );
}
