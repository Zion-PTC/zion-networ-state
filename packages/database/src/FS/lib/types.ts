// TODO import blockchain and uncomment this
// import { blockchain } from "@zionstate/blockchain";
// type osmd = blockchain.types.OpenSeaMetadata;

import { objectInPackJson } from "./mapObject";

// export type OpenSeaMetadata = osmd;
export type OPSM = {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: [
    {
      trait_type: string;
      value: string;
    }
  ];
};

export type OpenSeaMetadata = OPSM;

export type targetInPkgJson = {
  dependencies: objectInPackJson;
  peerDependencies: objectInPackJson;
  devDependencies: objectInPackJson;
};
