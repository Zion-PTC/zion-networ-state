import { useEffect } from "react";
import { Palette } from "../HTML/React/classes";
import { LogoZion } from "../HTML/React/components/Icons/LogoZion";
import { NftPfpProps } from "../HTML/React/components/Items/CardTypes/NftPfp/";
import { ItemProps } from "../HTML/React/components/Pages";
import { fluid_7 } from "../HTML/React/lib/colors/Palettes/fluid_7";
import { GlobalStyles } from "../HTML/React/style/Global";

const src =
  "https://ipfs.io/ipfs/QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9?filename=QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9";

const { black, white } = fluid_7 as Required<
  Pick<Palette, keyof typeof fluid_7>
>;

const theme = {
  backgroundColor: "white",
  body: fluid_7.white as string,
  borderColor: fluid_7.black as string,
  headingColor: fluid_7.black as string,
  palette: fluid_7 as Required<
    Pick<Palette, keyof typeof fluid_7>
  >,
  primary: {
    backgroundColor: white,
    borderColor: black,
    color: black,
  },
  secondary: {
    backgroundColor: black,
    borderColor: white,
    color: white,
  },
  textColor: black,
};

const itemProps: ItemProps = {
  data: {
    title: "title",
    description: "description",
    highestBid: "32",
    info: "info",
    creatorField: "creator",
    royalties: "10%",
    currency: "ETH",
  },
  likeIcon: <LogoZion></LogoZion>,
  // menuIcon: <LogoZion></LogoZion>,
  src,
  theme,
};

const nftPfpProps: NftPfpProps = {
  headProps: {
    menuIcon: <LogoZion></LogoZion>,
    clientHeight: 0,
    theme,
  },
  infos: {
    bid_link: "",
    id: "1/20",
    likeCounts: "127",
    likeIcon: <p>like icon</p>,
    price: "0.32",
    title: "<Title here>",
  },
  src: "",
  theme,
};

export default function _app(props: any) {
  const { Component } = props;
  props = {
    ...props,
    itemProps: itemProps,
    ...itemProps,
    ...nftPfpProps,
  };
  useEffect(() => {
    setTimeout(
      () =>
        (props.src =
          "https://ipfs.io/ipfs/QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R?filename=QmP3KGfuYFEcL7ALkoYRbqmLeLmdyMdTacq92rgSc8Su4R"),
      2000
    );
  });
  return (
    <>
      <GlobalStyles {...props} />
      <Component {...props} />
    </>
  );
}
