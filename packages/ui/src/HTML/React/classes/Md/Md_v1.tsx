import styled from "styled-components";
import { useMdParser } from "../../lib/hooks";
import {
  MakeAsChild,
  NoizDatas,
  NoizProps,
} from "../../lib/types";
import { Flatten } from "../../lib/utility";
import { node } from "@zionstate/utils";
const guard = node.util.dataGuard;

/////// TYPES
export type Md_v1Data = {
  contentHtml?: string;
  contentString?: string;
};

export type Md_v1Booleans = {};

export type Md_v1Props = NoizProps<
  Md_v1Data & Md_v1Booleans
>;

export type Md_v1ClassBooleans = {};

export type Md_v1ClassProps = Flatten<
  NoizDatas<Md_v1Props> & Md_v1ClassBooleans
>;

export type Md_v1AsChild = MakeAsChild<
  "Md",
  Md_v1ClassProps
>;
/////////////

////////CLASS
export class Md_v1 extends BaseNoiz<
  Md_v1Data & Md_v1Booleans,
  Md_v1ClassBooleans
> {
  ERR1 = "No data array was givend";
  ERR2 = "No content string was givend";
  constructor(props: Md_v1ClassProps) {
    super(props);
  }

  Html = (props: Md_v1Props) => {
    // useEffect(() => {
    //   getPostData("Propaganda");
    // });
    const { contentHtml } = props;
    if (!contentHtml)
      throw new Error("no content was provided");
    return (
      <div
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        id="page"
      />
    );
  };

  useMdParser = useMdParser;

  Content = () => {
    // TODO @giacomogagliano make the guard function have
    // built in errors which detect the data key and props
    // it as error message.
    const datas = guard(this.props.datas[0], this.ERR1);
    const contentString = guard(
      datas.contentString,
      this.ERR2
    );
    return this.useMdParser(contentString, "html-react");
  };

  Style = styled(this.Html)`
    img {
      width: 100vw;
    }
  `;

  Mapper = Md_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
