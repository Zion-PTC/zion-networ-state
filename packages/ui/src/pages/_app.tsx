import { GlobalStyles } from "../HTML/React/style/Global";

export default function _app(props: any) {
  const { Component } = props;
  props = {
    menuIcon: <></>,
    likeIcon: <></>,
    primary: { borderColor: undefined },
    theme: {
      primary: { borderColor: undefined },
      palette: {},
    },
  };
  props.primary.borderColor = "#bb381e";
  props.theme.primary.borderColor = "#bb381e";
  props.theme.palette.grey = "#bb381e";
  props.theme.headingColor = "black";
  props.theme.body = "transparent";
  props.theme.textColor = "black";
  return (
    <>
      <GlobalStyles {...props} />
      <Component {...props} />
    </>
  );
}
