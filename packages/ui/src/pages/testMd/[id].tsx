import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Md } from "../../HTML/React/classes";
import { parseISO, format } from "date-fns";
import { getAllPostIds, getPostData } from "./posts";

function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

// export default function index() {
//   return <Md ></Md>;
// }

// import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
// import Head from "next/head";
// import Date from "../../components/date";
// import styled from "styled-components";
// import MDContent from "../../components/MDContent";

// This file uses a custom function which itself uses
// [unified]("https://www.npmjs.com/package/unified") which
// is a tool which generates syntax trees by parsing several
// type of input formats (mds, yaml).

// It parses the `.md` file and create a valid HTML content.

// Currentlty I am working on extending this process and
// transform the md in React nodes, which shall probably be
// the most secure way to create html our of a text.

const Article = styled.article`
  #headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  #lightText {
    color: #666;
  }
`;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: { postData },
  };
}

export default function Post(props) {
  const { postData } = props;

  return (
    <Article>
      <div>ciao</div>
      <h1 id="headingXl">{postData.title}</h1>
      <div id="lightText">
        <Date dateString={postData.date} />
      </div>
      <Md
        datas={[{ contentHtml: postData.contentHtml }]}
      />
    </Article>
  );
}
