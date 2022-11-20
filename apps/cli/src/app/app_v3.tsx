import { Box } from "ink";
import React, { Component, useEffect } from "react";
import { useBasicInput } from "../hooks/index";

export class Noiz_v3 extends Component {
  constructor(props: {}) {
    super(props);
  }

  Html = () => {
    const { usrKey } = useBasicInput();
    useEffect(() => {
      console.log(usrKey?.downArrow);
    }, [usrKey]);
    usrKey;

    return <Box flexDirection="column"></Box>;
  };

  override render() {
    return <this.Html></this.Html>;
  }
}
