import styled from "styled-components";
// import { BaseNoiz } from ".";

/////// BASENOIZ GENERICS
type Props = {
  text: string;
};
type ClassComponent_v1ElementProps = NoizProps<Props>;
/////////////////////////////

type ClassComponent_v1Css = {};

export type ClassComponent_v1Props = NoizDatas<
  Props,
  ClassComponent_v1Css
>;

export class ClassComponent_v1 extends BaseNoiz<ClassComponent_v1ElementProps> {
  constructor(props: ClassComponent_v1Props) {
    super(props);
  }
  Html = (props: ClassComponent_v1ElementProps) => {
    const typedProps =
      props as unknown as ClassComponent_v1ElementProps;
    return (
      <div className={typedProps.className}>
        {typedProps.text}
      </div>
    );
  };

  Style = styled(this.Html)<ClassComponent_v1ElementProps>`
    ${BaseNoiz.styles.getStyle("filled")}
  `;

  BaseNoizFactory = BaseNoiz.Factory(this.Style);

  render() {
    return (
      <this.BaseNoizFactory
        datas={this.props.datas}
      ></this.BaseNoizFactory>
    );
  }
}
