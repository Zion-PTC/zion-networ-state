import React from "react";

export default function MDContent(props: { contentHtml: string }) {
  const { contentHtml } = props;
  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}
