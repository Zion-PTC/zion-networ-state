import { getStaticPropsHandler } from "./getStaticPropsHandler";
import {
  data,
  database,
  dataByPath,
  DataType,
  genericPaths,
  getStaticProps,
  getStaticReturn,
} from "./types";

const NFTS = "http://localhost:3000/api/nfts";
export const getStatic = function <D extends DataType, Ds extends database<D>>(
  props: getStaticProps
): getStaticReturn<D> {
  let URL: string;
  let { hasPaths, type } = props;
  if (type === "nft") URL = NFTS;

  async function getStaticPaths() {
    const response = await fetch(URL);
    const body: D = await response.json();
    let paths: genericPaths[] = [];
    for (let key in body) paths.push({ params: { id: key } });
    return {
      paths,
      fallback: false,
    };
  }

  async function getStaticProps(
    props?: genericPaths
  ): Promise<{ props: data<D> | dataByPath<D> }> {
    if (hasPaths && props) {
      props.params.URL = URL;
      props.params.key = props.params.id;
    }
    return getStaticPropsHandler<D, Ds>(props, { URL });
  }

  return { getStaticPaths, getStaticProps };
};
