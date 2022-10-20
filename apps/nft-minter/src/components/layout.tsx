import Link from "next/link";
import React from "react";
import { HTML } from "@zionstate/ui";
import { ILayout } from "./Types/index";
import styled from "styled-components";

const components = HTML.React.components;
// Components
const ConnectionButton = components.Elements.ButtonTypes.ConnectionButton;
const ThemeButton = components.Elements.ButtonTypes.ThemeButton;
const ScrollToTopButton = components.Elements.ButtonTypes.ScrollToTopButton;
const HomeButton = components.Elements.ButtonTypes.HomeButton;
const NavBar = components.Layout.NavBar;
const Footer = components.Layout.Footer;
const TestButton = components.Elements.Button;

const Welcome = <p>Welcome</p>;
const Home = <Link href="/">Home</Link>;
const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
const Collection = <Link href="/collection">Collection</Link>;

const IconaFooter = styled.img`
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0;
`;

const Main = styled.main`
  overflow: scroll;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  border: 0.1px solid;
  border-radius: 100%;
  place-self: center;
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
  theme,
}) {
  return (
    <>
      <NavBar ref={navbar}>
        <HomeButton>
          {nft && Collection}
          {!landing && !nft && Home}
          {!connect && landing && ConnectWallet}
        </HomeButton>
        <TestButton></TestButton>
        <Logo
          src="https://ipfs.io/ipfs/QmWizN7HKYLpd85ifuNtbKBv2mYeyRxgHHnor8mKm3sZaF?filename=Logo_Zion.png"
          alt="LOGO_ZION"
        ></Logo>
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
        <ScrollToTopButton onClick={backToTopHandleClick}></ScrollToTopButton>
      )}
      <Footer ref={footer}>
        <a>
          <IconaFooter src="https://ipfs.io/ipfs/QmY65zzivWgvu7KHCtghz6ZaUtXLLtoehPk4nMHuLgWjEC?filename=arrowleft_white.png" />
        </a>
        <a>
          <IconaFooter src="https://ipfs.io/ipfs/QmRjd7bcAef7Pfg1Go1KXna68FmFLBPzQ5X1hnkt9rbVP3?filename=arrowright_white.png" />
        </a>
        <a>
          <IconaFooter src="https://ipfs.io/ipfs/QmZdkHiWkE9J9RTJDfAX6oQ7BtcuHVdtgGSUv6edLqwn68?filename=homepage_white.png" />
        </a>
        <a>
          <IconaFooter src="https://ipfs.io/ipfs/QmdNx8VYWL8C4e1qFNCy5UWpstrtQ3sHLgF2dsFkD7En9i?filename=cuore.png" />
        </a>
        <a>
          <IconaFooter src="https://ipfs.io/ipfs/QmR7uMi2vxb1VAqfb1Ex8k754A5XngnCZ82hc6m9dQt8dv?filename=utente.png" />
        </a>
      </Footer>
    </>
  );
};

export default Layout;
