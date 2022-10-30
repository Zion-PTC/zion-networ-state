import React, { CSSProperties as CSS } from "react";
import Profile from "../../components/Profile";
import Layout from "../../components/layout";
import { Data, NftData } from "../nft/[id]";
import { BasePropsFromApp } from "../_app";
import { HTML } from "@zionstate/ui";

const getStatic = HTML.Next.staticProps.getStatic;

export type CollectionProps = Data<NftData> &
  BasePropsFromApp;

export const { getStaticProps: gsp } = getStatic<NftData>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data"
);

export const getStaticProps = gsp;

export default function Collection(
  props: CollectionProps
) {
  return (
    <Layout {...props.layout}>
      <Profile {...props}></Profile>
    </Layout>
  );
}
