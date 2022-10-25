import React from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../../components/layout";

const PreLoaderAnimation = keyframes`
 0% {height:5px;transform:translateY(0px);background:#9b59b6;}
    25% {height:30px;transform:translateY(15px);background:#3498db;}
    50% {height:5px;transform:translateY(0px);background:#9b59b6;}
    100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;

const PreLoaderArea = styled.div`
  position: relative;
`;

const PreLoaderContainer = styled.div`
  display: flex;
  bottom: 0px;
  width: 9px;
  height: 5px;
  background: #9b59b6;
  animation: ${PreLoaderAnimation} 1.5s infinite ease-in-out;
`;

const Span2 = styled.span`
  left: 11px;
  animation-delay: 0.2s;
`;

const Span3 = styled.span`
  left: 22px;
  animation-delay: 0.4s;
`;

const Span4 = styled.span`
  left: 33px;
  animation-delay: 0.6s;
`;
const Span5 = styled.span`
  left: 44px;
  animation-delay: 0.8s;
`;

export default function Loading2(props) {
  return (
    <Layout {...props.layout}>
      <h1>Loading</h1>
      <PreLoaderArea>
        <PreLoaderContainer>
          <Span2></Span2>
          <Span3></Span3>
          <Span4></Span4>
          <Span5></Span5>
        </PreLoaderContainer>
      </PreLoaderArea>
    </Layout>
  );
}
