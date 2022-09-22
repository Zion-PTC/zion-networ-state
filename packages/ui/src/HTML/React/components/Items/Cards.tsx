import { Card } from "./Card";
import { ICards } from "./Types/Cards";

export const Cards: ICards = (props) => {
  const { children } = props;
  return (
    <>
      {children.map((child, i) => (
        <Card key={i} {...props} {...child} />
      ))}
    </>
  );
};
