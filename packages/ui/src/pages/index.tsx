import { NftPfp } from "../HTML/React/components/Items/CardTypes";
import { ItemsArea } from "../HTML/React/components/Items/ItemsArea";

export default function index(props: any) {
  return (
    <>
      <ItemsArea {...props}>
        <NftPfp {...props}></NftPfp>
      </ItemsArea>
    </>
  );
}
