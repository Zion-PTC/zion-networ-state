import styled from "styled-components";
// import {
//   IuseMdParser,
//   useMdParser,
// } from "../../lib/hooks";
import { parseISO, format } from "date-fns";
import {
  MakeAsChild,
  NoizDatas,
  NoizProps,
} from "../../lib/types";
import { Flatten } from "../../lib/utility";
import { node } from "@zionstate/utils";
import { GrayMatterFile } from "gray-matter";
import {
  IuseProcessor,
  useProcessor,
} from "../../lib/hooks";

// TODO @giacomogagliano make the guard function have
// built in errors which detect the data key and props
// it as error message.
const guard = node.util.dataGuard;

interface Article {
  title: string;
  date: string;
}

/////// TYPES
export type Md_v1Data = {
  contentHtml?: string;
  contentString?: string;
  matterResult?: GrayMatterFile<string>;
};

export type Md_v1Booleans = {
  md_react?: boolean;
  md_string?: boolean;
  md_raw_react?: boolean;
};

export type Md_v1Props = NoizProps<
  Md_v1Data & Md_v1Booleans
>;

export type Md_v1ClassBooleans = {
  article?: boolean;
};

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

  useProcessor = useProcessor;

  useMd2String(
    props: Required<Pick<Md_v1Props, "matterResult">> &
      Exclude<Md_v1Props, "matterResult">,
    useProcessor: IuseProcessor,
    Element: () => JSX.Element
  ) {
    const res = useProcessor(
      guard(props.matterResult.content, ""),
      "md-string"
    );
    let string: string = "<div>moserfocker</div>";
    if (typeof res === "string") string = res;
    Element = () => (
      <div
        className={props.className}
        dangerouslySetInnerHTML={{
          __html: string as string,
        }}
      ></div>
    );
    return Element;
  }

  useMd2React(
    matterResult: GrayMatterFile<string>,
    useProcessor_: IuseProcessor,
    Element: () => JSX.Element
  ) {
    const res = useProcessor_(
      guard(
        matterResult.content,
        "no matter result content"
      ),
      "md-react"
    );

    if (typeof res !== "string") {
      Element = () => guard(res, "");
    }

    return Element;
  }

  useMd2RawReact(
    matterResult: GrayMatterFile<string>,
    useProcessor: IuseProcessor,
    Element: () => JSX.Element
  ) {
    const res = useProcessor(
      matterResult.content,
      "md-raw-react"
    );

    if (typeof res !== "string") {
      Element = () => guard(res, "");
    }

    return Element;
  }

  Date(props: { dateString: string }) {
    const date = parseISO(props.dateString);
    return (
      <time dateTime={props.dateString}>
        {format(date, "LLLL d, yyyy")}
      </time>
    );
  }

  Article = (props: Article & Md_v1Props) => {
    const up = this.useProcessor;
    const um2s = this.useMd2String;
    const um2r = this.useMd2React;
    const um2r2r = this.useMd2RawReact;
    let Element: () => JSX.Element = () => (
      <div>Loading</div>
    );

    const matterResult = guard(
      props.matterResult,
      "no matter results"
    );

    if (props.md_string)
      Element = um2s(
        props as Required<
          Pick<Md_v1Props, "matterResult">
        > &
          Exclude<Md_v1Props, "matterResult">,
        up,
        Element
      );

    if (props.md_react)
      Element = um2r(matterResult, up, Element);

    if (props.md_raw_react)
      Element = um2r2r(matterResult, up, Element);

    return (
      <article className={props.className}>
        <h1 id="headingXl">
          {props.matterResult?.data.title}
        </h1>
        <this.Date
          dateString={props.matterResult?.data.date}
        />
        <Element />
      </article>
    );
  };

  StyledArticle = styled(this.Article)`
    #headingXl {
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    }

    time {
      color: #666;
    }
  `;

  Style = styled(this.Html)`
    img {
      width: 100vw;
    }
  `;

  Mapper = Md_v1.mapperFactory(this.Style);

  render() {
    let Mapper: typeof this.Mapper | typeof this.Mapper =
      this.Mapper;
    if (this.props.article)
      Mapper = Md_v1.mapperFactory(this.StyledArticle);
    return <Mapper {...this.props}></Mapper>;
  }
}
