import {
  useEffect,
  useState,
  Fragment,
  createElement,
  ReactElement,
  JSXElementConstructor,
  SetStateAction,
  Dispatch,
} from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

type ProcessorTypes =
  | "html-react"
  | "md-react"
  | "md-string";

class Processor {
  type: ProcessorTypes = "html-react";
  text: string;
  setContent: Dispatch<
    SetStateAction<ReactElement<
      any,
      string | JSXElementConstructor<any>
    > | null>
  >;
  constructor(props: {
    text: string;
    setContent: Dispatch<
      SetStateAction<ReactElement<
        any,
        string | JSXElementConstructor<any>
      > | null>
    >;
  }) {
    const { text, setContent } = props;
    this.text = text;
    this.setContent = setContent;
    this.html_react = () => {
      unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {},
        })
        .process(this.text)
        .then(file => {
          const Element = file.result;
          const Component = Element;
          this.setContent(Component);
        });
    };
    this.md_react = () => {
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight, {
          languages: { dockerfile },
        })
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {},
        })
        .process(this.text)
        .then(file => {
          const Element = file.result;
          const Component = Element;
          this.setContent(Component);
        });
    };
    this.md_string = () => {
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .data("settings", { fragment: true })
        .use(rehypeHighlight, {
          languages: { dockerfile },
        })
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {},
        })
        .use(rehypeStringify)
        .process(this.text);
    };
  }
  html_react;
  md_react;
  md_string;
}

export interface IuseMdParser_v2 {
  (text: string, type: ProcessorTypes): ReactElement<
    any,
    string | JSXElementConstructor<any>
  > | null;
}

const makeProcessor = (
  text: string,
  setContent: Dispatch<
    SetStateAction<ReactElement<
      any,
      string | JSXElementConstructor<any>
    > | null>
  >,
  type: ProcessorTypes
): (() => void) => {
  const processor = new Processor({ text, setContent });
  const { html_react, md_react, md_string } = processor;
  let res: () => void;
  switch (type) {
    case "html-react":
      res = html_react;
      break;

    case "md-react":
      res = md_react;
      break;

    case "md-string":
      res = md_string;
      break;

    default:
      res = html_react;
      break;
  }
  return res;
};

export const useMdParser_v2: IuseMdParser_v2 = function (
  text: string,
  type: ProcessorTypes
) {
  const [Content, setContent] = useState(
    Fragment as unknown as () => ReactElement<
      any,
      string | JSXElementConstructor<any>
    > | null
  );

  useEffect(makeProcessor(text, setContent, type), [text]);

  return Content;
};
