// import { NftPfp } from "../HTML/React/components/Items/CardTypes";
// import { NftPfp_v2 } from "../HTML/React/components/Items/CardTypes/NftPfp/";
// import { Infos_v2 } from "../HTML/React/components/Items/sections/Infos/";
import { Infos_v4 } from "../HTML/React/components/Items/sections/Infos/v4";

export default function index(props: any) {
  return (
    <>
      {/* <NftPfp_v2 {...props}></NftPfp_v2> */}
      <Infos_v4 {...props}></Infos_v4>
    </>
  );
}
