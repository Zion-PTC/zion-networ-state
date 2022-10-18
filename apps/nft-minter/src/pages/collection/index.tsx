import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { Data, NftData } from "../nft/[id]";
import { BasePropsFromApp } from "../_app";
import { HTML } from "@zionstate/ui";

const components = HTML.React.components;
const ContentArea = components.Layout.ContentArea;
const Area = components.Layout.sections.Area;
const Cards = components.Items.Cards;
const getStatic = HTML.Next.staticProps.getStatic;

export type CollectionPropsFromApp = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
};

export type CollectionProps = Data<NftData> & BasePropsFromApp;

export const { getStaticProps: gsp } = getStatic<NftData>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data"
);

export const getStaticProps = gsp;

const ProfileArea = styled.div`
  display: grid;

  // TODO covertire in numeri relativi
  grid-template-rows: 1fr 8fr 0.5fr;
  height: 100%;
  position: relative;
  background-color: red;
`;

export default function Collection(props: CollectionProps) {
  // THIS COMMENT SHALL BE left as we need it to use the
  // infinite scroll hook.
  // const {
  //   isLoading,
  //   loadMoreCallback,
  //   hasDynamicPosts,
  //   dynamicPosts,
  //   isLastPage,
  // } = useInfiniteScroll(props.data);
  let data = props.data;

  return (
    <Layout {...props.layout}>
      <ProfileArea id="profile-area">
        <div id="collection-area">Collection</div>
        <ContentArea id="content-area">
          <Area
            id="area-area"
            width={props.collection.width}
            height={props.collection.height}
            blockSize={props.collection.blockSize}
            columns={props.collection.columns}
          >
            <Cards type="nft-pfp">{data}</Cards>
          </Area>
          {/*this here under is the infinte scroll loader, we need to create a pagination method and send it a paginated result of the nfts */}
          {/* <Loader
            isLoading={isLoading}
            isLastPage={isLastPage}
            loadMoreCallback={loadMoreCallback}
          /> */}
        </ContentArea>
      </ProfileArea>
    </Layout>
  );
}
