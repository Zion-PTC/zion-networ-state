import { Item } from "../../HTML/React/components/Pages";

export default function index(props: any) {
  return (
    <>
      <Item {...props.itemProps}></Item>
    </>
  );
}
