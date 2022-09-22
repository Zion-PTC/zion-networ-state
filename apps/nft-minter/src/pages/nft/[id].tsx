import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { CollectionPropsFromApp } from "../collection";
import { HTML } from "@zionstate/ui";
import Layout from "../../components/layout";
import { OpenSeaMetadata } from "../api/Types/nfts";

const components = HTML.React.components;
const ContentArea = components.Layout.ContentArea;
const getStatic = HTML.Next.staticProps.getStatic;

export interface NftsData {
  [key: string]: NftData;
}

export interface NftData {
  id: number;
  name: string;
  slug: string;
  [key: string]: string | number | StaticImageData[];
  src: string;
}

export type Data<D> = { data: D[] };

export const { getStaticPaths: gspt, getStaticProps: gsp } = getStatic<
  NftData,
  { id: string }
>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data",
  undefined,
  { id: "" },
  "id"
);
export const getStaticPaths = gspt;
export const getStaticProps = gsp;

type dataByPath<T> = { data: T };

export const Nft: (
  props: dataByPath<OpenSeaMetadata> & { layout: CollectionPropsFromApp }
) => JSX.Element = function (props) {
  const { data, layout } = props;

  const { name, image } = data;
  console.log(data);

  return (
    // TODO import the profile layout from /packages/ui/src/HTML/React/components/Pages/Item.tsx
    <Layout {...layout} nft>
      <h1>Nft:</h1>
      <ContentArea id="nft-page-area">
        <p>{name}</p>
        <p>{image}</p>
      </ContentArea>
      <Link href="/mint">Mint</Link>
    </Layout>
  );
};

export default Nft;
