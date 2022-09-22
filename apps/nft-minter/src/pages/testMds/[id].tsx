import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import styled from "styled-components";

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

export default function Post(props) {
  const { postData } = props;
  console.log(postData);

  return (
    <Layout nft {...props.layout}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Article>
        <h1 id="headingXl">{postData.title}</h1>
        <div id="lightText">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Article>
    </Layout>
  );
}

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
    props: {
      postData,
    },
  };
}
