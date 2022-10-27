// import Link from "next/link";
import React from "react";
import { HTML } from "@zionstate/ui";
import { ILayout } from "./Types/index";
import styled from "styled-components";
import {
  Account,
  ArrowLeft,
  ArrowRight,
  FilterAlt,
  Like,
  Moon,
  ScrollToTop,
  Search,
  Sun,
} from "./Icons";
import { Home } from "./Icons";
import { SVGButtonProps } from "./Icons/Types";
import Head from "next/head";

const components = HTML.React.components;
// Components
const ConnectionButton = components.Elements.ButtonTypes.ConnectionButton;
const ThemeButton = components.Elements.ButtonTypes.SVGButton;
const FilterAltButton = components.Elements.ButtonTypes.SVGButton;
const SearchButton = components.Elements.ButtonTypes.SVGButton;
const ScrollToTopButton = components.Elements.ButtonTypes.ScrollToTopButton;
// const HomeButton = components.Elements.ButtonTypes.HomeButton;
const NavBar = components.Layout.NavBar;
const Footer = components.Layout.Footer;
// const TestButton = components.Elements.Button;

const Welcome = <p>Welcome</p>;
// const Home = <Link href="/">Home</Link>;
// const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
// const Collection = <Link href="/collection">Collection</Link>;

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
  svg: (props: SVGButtonProps) => JSX.Element;
  constructor(
    src: string,
    link: string,
    svg: (props: SVGButtonProps) => JSX.Element
  ) {
    this.link = link;
    this.src = src;
    this.svg = svg;
  }
}

const HomeFooterLink = new FooterLink(HOME, "/", Home);
const ArrowLeftFooterLink = new FooterLink(ARROWLEFT, "/", ArrowLeft);
const ArrowRightFooterLink = new FooterLink(ARROWRIGHT, "/", ArrowRight);
const CuoreFooterLink = new FooterLink(CUORE, "/", Like);
const AccountFooterLink = new FooterLink(ACCOUNT, "/", Account);

const AIconsFooter = (props: { footerLinks: FooterLink[]; fill: string }) => {
  return (
    <>
      {props.footerLinks.map((footerLink, idx) => (
        <AIconFooter key={idx} footerLink={footerLink} fill={props.fill} />
      ))}
    </>
  );
};

const AIconFooter = (props: { footerLink: FooterLink; fill: string }) => {
  const { link, src, svg: SVG } = props.footerLink;
  return (
    <a href={link}>
      {/* <IconaFooter src={src} /> */}
      <SVG fill={props.fill} />
    </a>
  );
};

const FOOTERLINKS: FooterLink[] = [
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
  grid-area: logo;
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
  isLightTheme,
}) {
  const MoonSvg = Moon({
    fill: theme.primary.borderColor,
    width: "24",
    height: "24",
  });

  const SunSvg = Sun({
    stroke: theme.primary.borderColor,
    width: "24",
    height: "24",
  });

  const ThemeSvg = isLightTheme ? MoonSvg : SunSvg;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bombotaitol</title>
      </Head>
      <NavBar
        ref={navbar}
        gridTemplateAreas="'. home search logo web3 theme menu'"
        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
      >
        {/* <HomeButton>
          {nft && Collection}
          {!landing && !nft && Home}
          {!connect && landing && ConnectWallet}
        </HomeButton> */}
        <SearchButton
          svg={Search({
            stroke: theme.primary.borderColor,
            width: "20",
            height: "20",
          })}
          gridArea="search"
        />
        <LogoNav />
        <ConnectionButton onClick={metamask.handleClick}>
          <text>{metamask.buttonMess}</text>
        </ConnectionButton>
        <ThemeButton
          svg={ThemeSvg}
          handleClick={handleClick}
          gridArea="theme"
        />
        <FilterAltButton
          svg={FilterAlt({
            fill: theme.primary.borderColor,
            width: "24",
            height: "24",
          })}
          gridArea="menu"
        />
      </NavBar>
      <Main ref={contentArea}>
        {landing && Welcome}
        {children}
      </Main>
      {showButton && (
        <ScrollToTopButton
          handleClick={backToTopHandleClick}
          svg={ScrollToTop({
            stroke: theme.primary.borderColor,
            width: "51",
            height: "51",
          })}
          position={{ bottom: "10%", right: "4%" }}
        ></ScrollToTopButton>
      )}
      <Footer ref={footer}>
        <AIconsFooter footerLinks={FOOTERLINKS} fill={theme.palette.white} />
      </Footer>
    </>
  );
};

export default Layout;
