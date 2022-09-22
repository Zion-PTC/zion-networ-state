import React from "react";
import Layout from "../../components/layout";
import { HTML } from "@zionstate/ui";

const zReact = HTML.React;
const useEthereum = zReact.lib.hooks.useEthereum;

export async function getStaticProps() {
  const contractAddress = "0x7c544aC11d219d10Bcd3ef2A048f4a72588a2d59";
  const connectMetamaskMessage = "Connect Metamask";
  const metamaskNotInstalled = "no Metamask";

  return {
    props: {
      data: { contractAddress, connectMetamaskMessage, metamaskNotInstalled },
    },
  };
}

function noMetamaskClick() {
  console.log("clicked");
}

export default function index(props) {
  const { data } = props;

  const { buttonMess, handleClick } = useEthereum(data, noMetamaskClick);

  return (
    <Layout {...props.layout}>
      <div>ciao</div>
      <button onClick={handleClick}>{buttonMess}</button>
      <p>{data.contractAddress}</p>
    </Layout>
  );
}
