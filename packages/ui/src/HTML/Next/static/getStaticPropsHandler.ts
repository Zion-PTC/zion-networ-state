import { getStaticPropsWithPath } from "./geStaticPropsWithPath";
import { getStaticProps } from "./getStaticProps";
import {
  data,
  database,
  dataByPath,
  DataType,
  genericPaths,
  getStaticPropsOptions,
} from "./types";

/**
 * Handles the different types of call:
 * - getStaticProps: returns datas without querying a
 *   specific item
 * - getStaticPropsWithPath: returns datas for a single item
 *   depending on the quert and it require 2 functions,
 *   getStaticProps and getStaticPath
 * @param props this can be either an undefied value (in the
 * case the function handles the getStaticProps method), or
 * it can be an object with a params member
 * @param args this
 * @returns
 */
export const getStaticPropsHandler = async function <
  D extends DataType,
  Ds extends database<D>
>(
  props?: genericPaths,
  args?: getStaticPropsOptions
): Promise<{ props: data<D> | dataByPath<D> }> {
  let nuprops: data<D> | dataByPath<D> = { data: undefined };

  if (args && "URL" in args && !("params" in args)) {
    const res = await getStaticProps<D, Ds>(args);
    if (res && !res.data) throw new Error("");

    if (res) nuprops = res;
  }
  if (args && props && "params" in props) {
    nuprops = (await getStaticPropsWithPath<Ds, D>(props, args)).props;
  }
  return {
    props: nuprops,
  };
};
