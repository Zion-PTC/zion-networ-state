import { StaticImageData } from "next/image";
export type DataType = {
  [key: string]: string | number | boolean | StaticImageData[];
};

////////////////////////////// GET STATIC
/**
 * Returned by getStaticProps without path (not dyn)
 */
export type data<D> = { data?: D[] };
/**
 * Returned by getStaticProps with path (dynamic)
 */
export type dataByPath<D> = { data?: D };
/**
 * Arguments of the getStatic function
 */
export type getStaticProps = {
  type: "nft" | "album";
  hasPaths: boolean;
};
/**
 * Return of the getStatic function
 */
export type getStaticReturn<D> = {
  getStaticPaths: () => Promise<getStaticPathsReturn>;
  getStaticProps: (
    props: genericPaths
  ) => Promise<{ props: data<D> | dataByPath<D> }>;
};

////////////////////////////// GET STATIC PATHS
export type genericParams = { [key: string]: string | undefined };
/**
 * Type of the path argument returned by getStaticPaths
 */
export type genericPaths = { params: genericParams };
/**
 * Return type of the getStaticFunction
 */
export type getStaticPathsReturn = {
  paths: genericPaths[];
  fallback: boolean;
};

/////////////////////////////// GET STATIC PROPS
export type getStaticPropsOptions = {
  URL: string;
};
/**
 * Path example using "id" ad key paramter which shall be
 * included in the http request by the client.
 */
export type paths = {
  params: {
    id: string;
  };
};
///////// WITHOUT PATH
/**
 * Object which represents the set of datas which is sent to
 * the client respongin to a query with a path
 */
export type database<D> = { [key: string]: D };
export interface IgetStaticProps {
  <D extends DataType, Ds extends database<D>>(
    args: getStaticPropsOptions,
    dalevare?: Ds // TODO da levare
  ): Promise<data<D>> | undefined;
}
///////// WITH PATH (DYNAMIC)
export type getStaticPropsWithPathResponseBody = database<DataType>;
export type getStaticPropsWithPathProps = dataByPath<DataType>;
export interface IgetStaticPropsWithPath {
  (props: genericPaths, args: getStaticPropsOptions): Promise<{
    props: dataByPath<DataType>;
  }>;
}
