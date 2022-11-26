import styled from "styled-components";
import { Component } from "react";
import { styles } from "../../../style/common/CommonStyles";
import { mapper as mp, mapperReturn } from "../../util";
import { useInfiniteScroll } from "../../hooks";
import { NoizDatas, NoizProps } from "../../types";
// import { NoizDatas } from "../../types";

type LoaderProps<T> = Pick<
  useInfiniteScroll<T>,
  "isLoading" | "loadMoreCallback" | "isLastPage"
>;

export var BaseNoiz_v4 = class<
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

  Loader: <T>(props: LoaderProps<T>) => JSX.Element =
    props => {
      if (props.isLoading) return <p>Loading...</p>;

      if (props.isLastPage) return <p>End of content</p>;

      return (
        <div ref={props.loadMoreCallback}>
          load more callback
        </div>
      );
    };

  mapperBuilder(): MapperBuilderReturn {
    let mapper = BaseNoiz_v4.mapperFactory(
      this.Style
    ) as MapperBuilderReturn;
    // this.types.forEach(type => {});
    return mapper;
  }

  Html = (props: Props) => {
    return (
      <div className={props.className}>
        {props.children ? props.children : "BaseNoiz"}
      </div>
    );
  };

  Style = styled(this.Html)`
    ${BaseNoiz_v4.styles.getCommonStyle("filled")}
  `;

  Mapper = BaseNoiz_v4.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
};
