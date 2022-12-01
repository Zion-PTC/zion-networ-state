import styled from "styled-components";
import { Component } from "react";
import { styles } from "../../../style/common/CommonStyles";
import { mapper as mp, mapperReturn } from "../../util";
import { NoizDatas, NoizProps } from "../../types";
// import { NoizDatas } from "../../types";

export var BaseNoiz_v2 = class<
  Data extends {},
  ClassBooleans extends {},
  State extends {} = {},
  Props extends {
    className?: string;
    children?: any;
  } & Data = NoizProps<Data, true>,
  ClassProps extends NoizDatas<Props> &
    ClassBooleans = NoizDatas<Props> & ClassBooleans,
  MapperBuilderReturn extends mapperReturn<Props> = mapperReturn<Props>
> extends Component<ClassProps, State> {
  static styles = styles;

  static mapperFactory = mp;

  types: ClassBooleans[] = [];

  constructor(props: ClassProps) {
    super(props);
  }

  mapperBuilder(): MapperBuilderReturn {
    let mapper = BaseNoiz_v2.mapperFactory(
      this.Style
    ) as MapperBuilderReturn;
    // this.types.forEach(type => {});
    return mapper;
  }

  404 = "create a fallback 404 page";

  FallbackHtml = () => <p>There was some kind of error</p>;

  Html = (props: Props) => {
    return (
      <div className={props.className}>
        {props.children ? props.children : "BaseNoiz"}
      </div>
    );
  };

  Style = styled(this.Html)`
    ${BaseNoiz_v2.styles.getCommonStyle("filled")}
  `;

  Mapper = BaseNoiz_v2.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
};
