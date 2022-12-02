import React from "react";
import styled from "styled-components";

interface NuPropsType {
  name: string;
}

interface NuProps
  extends BuildProps<NuPropsType>,
    BaseNoizProps {}

class NuProps extends BaseNoizProps {
  constructor(props: BuildProps<NuPropsType>) {
    super(props);
    this.name = props.name;
    this.datas = props.datas;
  }
}

class Nu extends BaseNoiz<BuildProps<{ name: string }>> {
  Html = (props: BuildProps<{ name: string }>) => {
    return <h1>{props.children}</h1>;
  };
  StyledHtml = styled(this.Html)``;
  render() {
    let Element = this.makeElement();
    return (
      <Element name="">
        <li>odo</li>
        <p>{this.props.children}</p>
      </Element>
    );
  }
}

const child1 = new NuProps({
  name: "1",
  children: <div>bullshit</div>,
});

const child2 = new NuProps({
  name: "2",
  children: ["ciao2", "asdas"],
});

const child3 = new NuProps({
  name: "3",
  children: { name: "strio" }.name,
});

const child4 = new NuProps({
  name: "3",
  children: "ciao4",
});

const props = new NuProps({
  name: "ciao",
  multiply: true,
  datas: [child1, child2, child3, child4],
});

export default function index() {
  return <Nu {...props}>cioooo</Nu>;
}
