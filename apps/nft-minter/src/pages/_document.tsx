import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // TODO #2 l'import crea una richiesta ad una pagina /& che
  // ritorna un errore. capire da dove proviene il bug.
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,500;1,600;1,700;1,900&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
