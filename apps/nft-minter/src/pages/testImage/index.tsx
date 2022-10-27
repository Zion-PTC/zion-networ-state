import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { BasePropsFromApp } from "../_app";

const Img = styled.img`
  width: 5rem;
`;

async function SourceTimeout() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

export default function testImage(props: BasePropsFromApp) {
  const [src, setSrc] = useState("");
  const [src2, setSrc2] = useState(undefined);

  useEffect(() => {
    SourceTimeout().then(() => {
      setSrc(
        "https://ipfs.io/ipfs/Qmbz8bbd4FxuVY2Vt6wv6APHdajyuoH49rcjaSKdNu2RR2?filename=Qmbz8bbd4FxuVY2Vt6wv6APHdajyuoH49rcjaSKdNu2RR2"
      );
      console.log("then");
    });
    setSrc2(
      "https://ipfs.io/ipfs/QmXuFRrgRF5syNkGfS2MguVoLsyxeYeznmyiH8bWa4rdVu?filename=QmXuFRrgRF5syNkGfS2MguVoLsyxeYeznmyiH8bWa4rdVu"
    );
  }, []);

  return (
    <Layout {...props.layout}>
      <Img onLoad={() => console.log("loaded")} src={src}></Img>
      <Img src={src2} onLoad={() => console.log("bear")}></Img>
    </Layout>
  );
}
