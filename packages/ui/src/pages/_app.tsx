import { LogoZion } from "../HTML/React/components/Icons/LogoZion";
import { ItemProps } from "../HTML/React/components/Pages";
import { GlobalStyles } from "../HTML/React/style/Global";

// const cardInfosProps = {
//   bid_link: "",
//   id: "1/20",
//   likeCounts: "127",
//   likeIcon: <p>like icon</p>,
//   price: "0.32",
//   title: "<Title here>",
// };
const src =
  "https://ipfs.io/ipfs/QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9?filename=QmQbeC3h3eAZej3mQCGoQAcuVj7v3RiNJqQ3huzjzDywb9";

const itemProps: ItemProps = {
  data: {
    title: "title",
    description: "description",
    highestBid: "32",
    info: "info",
    creatorField: "creator",
    royalties: "10%",
  },
  likeIcon: <LogoZion></LogoZion>,
  // menuIcon: <LogoZion></LogoZion>,
  src,
  theme: {
    backgroundColor: "white",
    body: "white",
    borderColor: "black",
    headingColor: "black",
    palette: {
      black: "black",
      darkgrey: "darkgrey",
      grey: "grey",
      white: "white",
    },
    primary: {
      backgroundColor: "white",
      borderColor: "black",
      color: "black",
    },
    secondary: {
      backgroundColor: "black",
      borderColor: "white",
      color: "white",
    },
    textColor: "black",
  },
};

export default function _app(props: any) {
  const { Component } = props;
  props = {
    theme: {
      primary: { borderColor: undefined },
      palette: {},
    },
  };
  props.theme.primary.borderColor = "#bb381e";
  props.theme.palette.grey = "#bb381e";
  props.theme.headingColor = "black";
  props.theme.body = "transparent";
  props.theme.textColor = "black";
  props = {
    ...props,
    // infos: cardInfosProps,
    itemProps: itemProps,
    ...itemProps,
  };
  return (
    <>
      <GlobalStyles {...props} />
      <Component {...props} />
    </>
  );
}
