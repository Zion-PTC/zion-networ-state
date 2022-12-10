import React from "react";
import fs from "fs";
import "./tesx";
import IndexPage from "./components/IndexPage";

const makeDati = IndexPage.makeDati;
const filter = IndexPage.filter;
const ds = IndexPage.filterDs;
const indexts = IndexPage.filterIndex;
const noiz = filter(".noiz");
const _app = filter("_app.tsx");
const app = filter("app");
const _document = filter("_document.tsx");

export function getStaticProps() {
  const res = fs.readdirSync("./src/pages/");
  const filtered = res
    .filter(ds)
    .filter(noiz)
    .filter(_app)
    .filter(_document)
    .filter(indexts)
    .filter(app);

  const neww = filtered.map(makeDati);
  // console.log(neww);

  return { props: { data: JSON.stringify(neww) } };
}

export default function index({ data }: { data: string }) {
  return <IndexPage data={data}></IndexPage>;
}
