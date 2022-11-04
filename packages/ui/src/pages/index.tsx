import {
  NftPfp,
  NftPfpProps,
} from "../HTML/React/components/Items/CardTypes/";
import { ItemsAreaProps } from "../HTML/React/components/Items/ItemsArea/";
import { ItemsArea } from "../HTML/React/components/Items/ItemsArea";

export default function index(
  props: NftPfpProps & ItemsAreaProps
) {
  return (
    <>
      <ItemsArea {...props}>
        <NftPfp {...props}></NftPfp>
      </ItemsArea>
    </>
  );
}
