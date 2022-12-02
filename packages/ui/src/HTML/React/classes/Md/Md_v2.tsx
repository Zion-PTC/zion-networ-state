import { dataGuard } from "@zionstate/utils";
import { parseISO, format } from "date-fns";
import { GrayMatterFile } from "gray-matter";
import styled from "styled-components";
import {
  IuseProcessor,
  useProcessor,
} from "../../lib/hooks";
const guard = dataGuard;
interface Article {
  title: string;
  date: string;
}

export interface Md_v2Props extends BaseNoizProps {
  contentHtml?: string;
  contentString?: string;
  matterResult?: GrayMatterFile<string>;
  md_react?: boolean;
  md_string?: boolean;
  md_raw_react?: boolean;
  article?: boolean;
}

export class Md_v2Props extends BaseNoizProps {
  constructor(props: Md_v2Props) {
    super(props);
    // TODO #29 @giacomogagliano aggiungere props
  }
}
export interface Md_v2State {}

export interface Md_v2
  extends BaseNoiz<Md_v2Props, Md_v2State> {}

export class Md_v2 extends BaseNoiz<
  Md_v2Props,
  Md_v2State
> {
  ERR1 = "No data array was given";
  ERR2 = "No content string was given";

  useProcessor = useProcessor;

  useMd2String(
    props: Required<Pick<Md_v2Props, "matterResult">> &
      Exclude<Md_v2Props, "matterResult">,
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

  Article = (props: Article & Md_v2Props) => {
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
          Pick<Md_v2Props, "matterResult">
        > &
          Exclude<Md_v2Props, "matterResult">,
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

  Html = (props: Md_v2Props) => {
    return <h1>{props.children}</h1>;
  };

  StyledHtml = styled(this.Html)`
    img {
      width: 100vw;
    }
  `;
  render() {
    let Element = this.StyledHtml;
    return <Element></Element>;
  }
}
