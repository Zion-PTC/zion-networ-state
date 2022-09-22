import Link from "next/link";
import React from "react";
import { HTML } from "@zionstate/ui";
import { ILayout } from "./Types/index";
import styled from "styled-components";

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
}) {
  return (
    <>
      <NavBar ref={navbar}>
        {nft ? Collection : ""}
        {!landing && !nft ? Home : ""}
        {!connect && landing ? ConnectWallet : ""}
        <ConnectionButton onClick={metamask.handleClick}>
          <p>{metamask.buttonMess}</p>
        </ConnectionButton>
        <ThemeButton onClick={handleClick}>
          <p>Switch p Theme</p>
        </ThemeButton>
      </NavBar>
      <Main ref={contentArea}>
        {landing ? Welcome : ""}
        {children}
      </Main>
      <Footer ref={footer}>ciao</Footer>
    </>
  );
};

export default Layout;
