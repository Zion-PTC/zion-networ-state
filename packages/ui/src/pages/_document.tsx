import React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { robotoGoogleQuery } from "../HTML/React/style/Global";
/**
 * TODO
 * @returns
 */

function Document_v2() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={robotoGoogleQuery} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const Document = Document_v2;

export default Document;
