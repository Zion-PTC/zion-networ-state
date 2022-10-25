import Link from "next/link";
import React from "react";
import { HTML } from "@zionstate/ui";
import { ILayout } from "./Types/index";
import styled from "styled-components";
import { ScrollToTop } from "./SVGs";

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

///FOOTER LINKS///////////////////////////////////////////////////////////////////////////////////////

const ARROWLEFT =
  "https://ipfs.io/ipfs/QmY65zzivWgvu7KHCtghz6ZaUtXLLtoehPk4nMHuLgWjEC?filename=arrowleft_white.png";
const ARROWRIGHT =
  "https://ipfs.io/ipfs/QmRjd7bcAef7Pfg1Go1KXna68FmFLBPzQ5X1hnkt9rbVP3?filename=arrowright_white.png";
const HOME =
  "https://ipfs.io/ipfs/QmZdkHiWkE9J9RTJDfAX6oQ7BtcuHVdtgGSUv6edLqwn68?filename=homepage_white.png";
const CUORE =
  "https://ipfs.io/ipfs/QmdNx8VYWL8C4e1qFNCy5UWpstrtQ3sHLgF2dsFkD7En9i?filename=cuore.png";
const ACCOUNT =
  "https://ipfs.io/ipfs/QmR7uMi2vxb1VAqfb1Ex8k754A5XngnCZ82hc6m9dQt8dv?filename=utente.png";

class FooterLink {
  src: string;
  link: string;
  constructor(src: string, link: string) {
    this.link = link;
    this.src = src;
  }
}

const HomeFooterLink = new FooterLink(HOME, "/");
const ArrowLeftFooterLink = new FooterLink(ARROWLEFT, "/");
const ArrowRightFooterLink = new FooterLink(ARROWRIGHT, "/");
const CuoreFooterLink = new FooterLink(CUORE, "/");
const AccountFooterLink = new FooterLink(ACCOUNT, "/");

const AIconsFooter = (props: { footerLinks: FooterLink[] }) => {
  return (
    <>
      {props.footerLinks.map((footerLink, idx) => (
        <AIconFooter src={footerLink.src} key={idx} link={footerLink.link} />
      ))}
    </>
  );
};

const AIconFooter = (props: { src: string; link: string }) => {
  return (
    <a href={props.link}>
      <IconaFooter src={props.src} />
    </a>
  );
};

const FOOTERLINKS = [
  ArrowLeftFooterLink,
  ArrowRightFooterLink,
  HomeFooterLink,
  CuoreFooterLink,
  AccountFooterLink,
];

const IconaFooter = styled.img`
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////

const Main = styled.main`
  overflow: auto;
`;

const LogoNav = () => {
  return (
    <Logo
      src="https://ipfs.io/ipfs/QmWizN7HKYLpd85ifuNtbKBv2mYeyRxgHHnor8mKm3sZaF?filename=Logo_Zion.png"
      alt="LOGO_ZION"
    />
  );
};

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  place-self: center;
  overflow: hidden;
  transition-duration: 0.8s;
  transition-property: transform;
  &:hover {
    transform: rotate(360deg);
  }
  @keyframes ruota {
    from {
      top: 0px;
    }
    to {
      top: 1200px;
    }
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
        <LogoNav />
        <ConnectionButton onClick={metamask.handleClick}>
          <text>{metamask.buttonMess}</text>
        </ConnectionButton>
        <ThemeButton onClick={handleClick}>
          <text>Switch p Theme</text>
        </ThemeButton>
      </NavBar>
      <Main ref={contentArea}>
        {landing && Welcome}
        {children}
      </Main>
      {showButton && (
        <ScrollToTopButton
          handleClick={backToTopHandleClick}
          svg={ScrollToTop({ stroke: theme.primary.borderColor })}
          position={{ bottom: "10%", right: "4%" }}
        ></ScrollToTopButton>
      )}
      <Footer ref={footer}>
        <AIconsFooter footerLinks={FOOTERLINKS} />
      </Footer>
    </>
  );
};

export default Layout;
