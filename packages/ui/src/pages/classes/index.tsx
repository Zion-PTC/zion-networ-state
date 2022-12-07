import React from "react";
import Link from "next/link";
import fs from "fs";
import styled from "styled-components";
// import "@zionstate/git";
import { FS } from "@zionstate/database";
import type { FS as FsTypes } from "@zionstate/database";
import "@zionstate/zionbase";
import "@zionstate/utils";
import "@zionstate/blockchain";
import IndexPage from "../components/IndexPage";

const Dati = FS.Dati;
interface Dati extends FsTypes.Dati {}

const makeDati = (el: string) => {
  const dati = new Dati();
  dati.name = el;
  dati.status = "working ✅";
  return dati;
};

const maker =
  (name: string, status: Dati["status"]) => (el: Dati) => {
    if (el.name === name) {
      el.status = status;
    }
    return el;
  };

const filter = (file: string) => (dir: string) => {
  if (dir === file) return false;
  else return true;
};

const filterDs = filter(".DS_Store");
const filterIndex = filter("index.tsx");

const card = maker("card", "notter ⛔️");
const chart = maker("chart", "notter ⛔️");
const contract = maker("contract", "notter ⛔️");
const form = maker("form", "default-noiz");
const icon = maker("icon", "icons-not-showing");
const image = maker("image", "notter ⛔️");
const navbar = maker("navbar", "notter ⛔️");
const pages = maker("pages", "index-??");

export function getStaticProps() {
  const res = fs.readdirSync("./src/pages/classes");
  const filtered = res
    .filter(filterDs)
    .filter(filterIndex);
  const neww = filtered
    .map(makeDati)
    .map(card)
    .map(chart)
    .map(contract)
    .map(form)
    .map(icon)
    .map(image)
    .map(navbar)
    .map(pages);
  return { props: { data: JSON.stringify(neww) } };
}

const Div = styled.div`
  display: grid;
  ul {
    display: grid;
    #noiz-class {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function index({ data }: { data: string }) {
  const parsed = JSON.parse(data);
  console.log(parsed);
  return (
    <IndexPage data={data} path={["classes"]}></IndexPage>
  );
}
