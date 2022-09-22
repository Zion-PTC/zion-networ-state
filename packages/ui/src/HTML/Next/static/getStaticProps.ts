import {
  data,
  database,
  DataType,
  getStaticPropsOptions,
  IgetStaticProps,
} from "./types";

export const getStaticProps: IgetStaticProps = async function <
  D extends DataType,
  Ds extends database<D>
>(args: getStaticPropsOptions) {
  const response = await fetch(args.URL);
  const body: Ds = await response.json();
  let props: data<D> = { data: undefined };
  props.data = [];
  for (let key in body) {
    // TODO mettere apposto e testare se funziona
    // @ts-expect-error
    props.data.push(body[key]);
  }
  if (!props.data) throw new Error("");
  return props;
};
