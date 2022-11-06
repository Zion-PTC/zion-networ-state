import { ItemsArea } from "../HTML/React/components/Items/ItemsArea";
import {
  Card,
  CardProps,
} from "../HTML/React/components/Items";

export default function index(props: CardProps) {
  return (
    <>
      <ItemsArea {...props}>
        <Card {...props}></Card>
      </ItemsArea>
    </>
  );
}
