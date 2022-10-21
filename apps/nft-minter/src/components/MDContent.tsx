import React from "react";
import styled from "styled-components";

const MDContentArea = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  img {
    width: 100vw;
  }
`;

export default function MDContent(props: { contentHtml: string }) {
  const { contentHtml } = props;
  return (
    <MDContentArea
      dangerouslySetInnerHTML={{ __html: contentHtml }}
      // TODO #3 per non far buggare il render ho aggiunto un
      // id a questo elemento con lo stesso id che viene
      // ricercato in _app. Al momento cerca un elemento con
      // id "profile-area", ma questa cosa sarebbe da
      // cambiare, probabilmente la miglior cosa è dargli un
      // nome più generico
      id="profile-area"
    />
  );
}