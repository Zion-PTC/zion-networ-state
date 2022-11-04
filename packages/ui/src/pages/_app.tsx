import { GlobalStyles } from "../HTML/React/style/Global";

const cardInfosProps = {
  bid_link: "",
  id: "1/20",
  likeCounts: "127",
  likeIcon: <p>like icon</p>,
  price: "0.32",
  title: "<Title here>",
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
    infos: cardInfosProps,
  };
  return (
    <>
      <GlobalStyles {...props} />
      <Component {...props} />
    </>
  );
}
