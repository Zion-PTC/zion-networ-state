import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const HomeTitle = <title>Home</title>;
const HomeLink = <Link href="/">Home</Link>;
const LogOut = <Link href="/">LogOut</Link>;
const PreviousPage = () => {
  const router = useRouter();
  return <a onClick={() => router.back()}>Prev</a>;
};

type Layout = (props: {
  children: JSX.Element | string | JSX.Element[];
  home?: boolean;
  feed?: boolean;
  product?: boolean;
  service?: boolean;
}) => JSX.Element;

const Layout: Layout = function ({ children, home, feed, product, service }) {
  return (
    <>
      {!home && !feed && !product && !service ? HomeLink : ""}
      {home ? HomeTitle : ""}
      {feed ? LogOut : ""}
      {product || service ? PreviousPage() : ""}
      <main>{children}</main>
      </>
  );
};

export default Layout;
