import { FC } from "react";
type props = { name: string };

const goo = (a: number) => {};

const foo = (a: number) => (b: number) => a + b;

const gogo = foo(10);
const secod = gogo(5);

export function Factory<
  T,
  C extends T & JSX.IntrinsicAttributes
>(Component: FC<T>) {
  return function (props: { datas: C[] }) {
    return (
      <>
        {props.datas.map((data, i) => (
          <Component key={i} {...data}></Component>
        ))}
      </>
    );
  };
}

const props: props[] = [
  { name: "string" },
  { name: "afsad" },
];

function Foo(props: props) {
  return <div>{props.name}</div>;
}

const FooFactory = Factory(Foo);

function Renderer(props: { datas: props[] }) {
  return <FooFactory {...props}></FooFactory>;
}
