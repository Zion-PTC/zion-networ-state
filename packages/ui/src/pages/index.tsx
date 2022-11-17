import {
  Card,
  CardProps,
} from "../HTML/React/components/Items";
import { ItemsArea } from "../HTML/React/components/Items/ItemsArea";

export default function index(props: CardProps) {
  return (
    <>
      {/* TODO sistemare */}
      {/* @ts-ignore */}
      <ItemsArea {...props}>
        <Card {...props}></Card>
      </ItemsArea>
    </>
  );
}
