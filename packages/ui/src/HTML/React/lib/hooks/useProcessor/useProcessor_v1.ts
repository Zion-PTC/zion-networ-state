import {
  createElement,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

/**
 *
 * // BUG the shit is crazy!! lol now when importing the
 * library in nft-minter if gives this nasty error:
 *
 * ```sh
 * error - ../../packages/ui/dist/zionstate-ui.cjs.dev.js:9:0
 * Module not found: ESM packages (unified) need to be imported. Use 'import' to reference
 * the package instead. https://nextjs.org/docs/messages/import-esm-externals
 *    7 | var utils = require('@zionstate/utils');
 *    8 | var jsxRuntime = require('react/jsx-runtime');
 * >  9 | var unified = require('unified');
 *   10 | var rehypeParse = require('rehype-parse');
 *   11 | var rehypeReact = require('rehype-react');
 *   12 |
 *
 * Import trace for requested module:
 * ../../packages/ui/dist/zionstate-ui.cjs.js
 * ./src/pages/testMetamask/index.tsx
 *
 * https://nextjs.org/docs/messages/module-not-found
 * ```
 *
 * I am deleting the export of this hook.
 * */
export function useProcessor_v1(text: string) {
  const [Content, setContent] = useState(
    Fragment as unknown as () => ReactElement<
      any,
      string | JSXElementConstructor<any>
    >
  );

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then(file => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}
