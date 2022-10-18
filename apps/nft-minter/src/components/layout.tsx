import Link from "next/link";
import React from "react";
import { HTML } from "@zionstate/ui";
import { ILayout } from "./Types/index";
import styled from "styled-components";
import { Button } from "@zionstate/ui/dist/HTML/React/components/Elements";

const components = HTML.React.components;
// Components
const ConnectionButton = components.Elements.ButtonTypes.ConnectionButton;
const ThemeButton = components.Elements.ButtonTypes.ThemeButton;
const NavBar = components.Layout.NavBar;
const Footer = components.Layout.Footer;

const Welcome = <p>Welcome</p>;
const Home = <Link href="/">Home</Link>;
const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
const Collection = <Link href="/collection">Collection</Link>;

const Main = styled.main`
  overflow: scroll;
`;

export const BackToTopButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20%;
  right: 20%;
  background: transparent;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 10px #ccc;
  padding: 0;
  margin: 0;
  &:hover {
    background: red;
  }
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  }
`;

const Layout: ILayout = function ({
  children,
  landing,
  connect,
  nft,
  navbar,
  contentArea,
  footer,
  handleClick,
  metamask,
  backToTopHandleClick,
  showButton,
}) {
  return (
    <>
      <NavBar ref={navbar}>
        {nft && Collection}
        {!landing && !nft && Home}
        {!connect && landing && ConnectWallet}
        <ConnectionButton onClick={metamask.handleClick}>
          <p>{metamask.buttonMess}</p>
        </ConnectionButton>
        <ThemeButton onClick={handleClick}>
          <p>Switch p Theme</p>
        </ThemeButton>
      </NavBar>
      <Main ref={contentArea}>
        {landing && Welcome}
        {children}
      </Main>
      {showButton && (
        <BackToTopButton onClick={backToTopHandleClick}></BackToTopButton>
      )}
      <Footer ref={footer}>ciao</Footer>
    </>
  );
};

export default Layout;
