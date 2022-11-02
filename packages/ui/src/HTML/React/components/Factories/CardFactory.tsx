import { FC } from "react";

export {};

type ComponentProps = { text: string };

function Component(props: ComponentProps) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

const Multiple = <T,>(props: T[], component: FC<T>) => (
  <>{props.map(component)}</>
);

export const CardFactory = function (
  props: ComponentProps | ComponentProps[]
) {
  const condition1 = Array.isArray(props);
  if (condition1) return Multiple(props, Component);
  else return <Component {...props}></Component>;
};

// const Result = () => {
//   return <CardFactory text="" />;
// };
