import React, {
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import {
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { GlobalStyle } from "../../../style/Global";
import { darkTheme, lightTheme } from "../../../themes";
import styled from "styled-components";
import {
  detectEthereumProvider,
  EVMweb,
  IEVMweb,
  MetaMaskEthereumProvider,
} from "@zionstate/database/EVM";
import { ethers } from "ethers";
import {
  detect,
  handleAccountsChangedCallbackFactory,
  handleAccountsChangedFactory,
  handleNetworkChange,
  listAccounts,
  listAccountsCallbacksFactory,
  requestAccounts,
} from "../../../lib/hooks";
import { WindowEthRequired } from "../../../lib/hooks/useEthereum/useEthereum_v2";

////////ETH

type useEthereumData_v2 = {
  contractAddress: string;
  connectMetamaskMessage: string;
  metamaskNotInstalled: string;
};

//////////

const theme = lightTheme;
const dark = darkTheme;

enum layouts {
  main = "main",
  istia = "istia",
  test = "test",
}
enum styles {
  defaultStyle = "defaultStyle",
}
enum themes {
  dark = "dark",
  light = "light",
}

export type DefaultThemizeUnion<T extends string> = {
  [props in T]: DefaultTheme;
};

type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;
type themeTypes = keyof typeof themes;
type Themes = DefaultThemizeUnion<themeTypes>;

interface DefaultNextApp {
  Component: FC;
  pageProps: any;
}

export interface NoizApp_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    DefaultNextApp {}

export class NoizApp_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface NoizApp_v2State
  extends BaseNoizState<NoizApp_v2Props> {
  theme: DefaultTheme;
  prefersColorScheme: keyof Themes;
  // metamask
  isMetamask: boolean;
  isConnected: boolean;
  buttonMess: string;
  signerAddress: string | null;
  contractAddress: string | null;
  contract: ethers.Contract | null;
  contractFactory:
    | EVMweb["contractFactories"][number]
    | null;
  provider: ethers.providers.Web3Provider | null;
  metamask: MetaMaskEthereumProvider | null;
  evm: IEVMweb | null;
  handleClick: () => void;
}

export class NoizApp_v2State extends BaseNoizState<NoizApp_v2Props> {}

export interface NoizApp_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    NoizApp_v2Props,
    NoizApp_v2State
  > {
  themes: Themes;
}

export class NoizApp_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  NoizApp_v2Props,
  NoizApp_v2State
> {
  static BUTTON_MESSAGE1 = "no connected";
  static CONNECT_METAMASK = "connect metamask";
  static METAMASK_NOT_INSTALLED =
    "no metamask installed, plase install";
  // static getDerivedStateFromProps(props, state) {}
  static defaultProps = {
    layout: layouts.main,
    style: styles.defaultStyle,
  };

  themes: Themes = { dark: darkTheme, light: lightTheme };

  constructor(props: NoizApp_v2Props) {
    super(props);
    const state = new NoizApp_v2State();
    state.prefersColorScheme = "light";
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    state.isMetamask = false;
    state.isConnected = false;
    state.buttonMess = NoizApp_v2.BUTTON_MESSAGE1;
    state.signerAddress = null;
    state.contract = null;
    state.contractAddress = null;
    state.contractFactory = null;
    state.provider = null;
    state.metamask = null;
    state.evm = null;
    this.state = state;
  }
  main = (props: { Component: FC }) => {
    const { Component } = props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component></Component>
      </ThemeProvider>
    );
  };

  test = (props: NoizApp_v2Props) => (
    <div className={props.className}>
      test
      <props.Component></props.Component>
    </div>
  );

  istia(props: NoizApp_v2Props) {
    const Layout = this.standard1;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <header>
            I am the header
            <button onClick={this.state.handleClick}>
              {this.state.buttonMess}
            </button>
            <button onClick={this.toggleTheme}>
              {this.state.prefersColorScheme === "dark"
                ? "light"
                : "dark"}
            </button>
          </header>
          <section>
            <props.Component
              {...props.pageProps}
            ></props.Component>
          </section>
          <footer>I am the footer</footer>
        </Layout>
      </ThemeProvider>
    );
  }

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main.bind(this),
    }),
    new this.Layout({
      name: layouts.istia,
      component: this.istia.bind(this),
    }),
    new this.Layout({
      name: layouts.test,
      component: this.test.bind(this),
    }),
  ];

  defaultStyle = styled(this.Html)``;

  bgcolor = `hsl(${210 + 90}, 55%, 75%)`;

  standard1 = styled.div`
    display: grid;
    grid-template-rows: 10vh 80vh 10vh;
    overflow: auto;
    grid-template-areas:
      "h"
      "content"
      "f";
    header {
      background-color: ${this.bgcolor};
    }
    section {
      container-type: size;
      grid-area: content;
      width: 100%;
      overflow: auto;
      display: grid;
      background-color: ${props =>
        this.state.theme.backgroundColor};
    }
    footer {
      background-color: ${this.bgcolor};
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  setTheme(theme: DefaultTheme) {
    this.setState({ theme });
  }

  setPrefersColorScheme(prefersColorScheme: themeTypes) {
    this.setState({
      prefersColorScheme,
    });
  }

  handleToggleTheme(prop: [themeTypes, themeTypes]) {
    const prefersColorScheme1 = prop[0];
    const prefersColorScheme2 = prop[1];

    this.state.prefersColorScheme == prefersColorScheme1
      ? this.setPrefersColorScheme(prefersColorScheme2)
      : this.setPrefersColorScheme(prefersColorScheme1);
  }

  toggleTheme = () => {
    this.state.prefersColorScheme === "dark"
      ? this.setPrefersColorScheme("light")
      : this.setPrefersColorScheme("dark");
  };

  setMetamask = (metamask: MetaMaskEthereumProvider) =>
    this.setState({ metamask });

  setIsConnected = (isConnected: boolean) =>
    this.setState({ isConnected });

  setIsMetamask = (isMetamask: boolean) =>
    this.setState({ isMetamask });

  setButtonMess = (buttonMess: string) =>
    this.setState({ buttonMess });

  setEvm = (evm: EVMweb) => this.setState({ evm });

  setProvider = (
    provider: ethers.providers.Web3Provider
  ) => this.setState({ provider });

  setHandleClick = (handleClick: () => void) =>
    this.setState({ handleClick });

  setContract = (contract: ethers.Contract) =>
    this.setState({ contract });

  EVMweb = EVMweb;

  listAccounts = () => {
    const metamask = this.state.metamask;
    if (!metamask) return;
    const provider = this.state.provider;
    const setIsConnected = this.setIsConnected;
    const setButtonMess = this.setButtonMess;
    const handleAccountsChangedCallbacks =
      handleAccountsChangedCallbackFactory(
        setIsConnected as Dispatch<
          SetStateAction<boolean>
        >,
        setButtonMess as Dispatch<SetStateAction<string>>,
        provider
      );
    const handleAccountsChanged =
      handleAccountsChangedFactory(
        listAccounts,
        provider,
        handleAccountsChangedCallbacks
      );
    const listAccountsCallbacks =
      listAccountsCallbacksFactory(
        this.setIsConnected as Dispatch<
          SetStateAction<boolean>
        >
      );
    listAccounts(this.state.provider, [
      listAccountsCallbacks,
    ]);
    metamask.on("accountsChanged", handleAccountsChanged);
  };

  initizalizeWeb3 = () => {
    const isMetamask = this.state.metamask;
    const contract = this.state.contractFactory;
    if (!isMetamask) return;
    if (!contract) throw new Error("no contract addr");
    const evm = new this.EVMweb({
      window: window as WindowEthRequired,
    });
    const contractAddress = this.state.contractAddress;
    const factory = evm.contractFactories[contract];
    const provider = evm.provider;
    provider.on("network", this.handleNetworkChange);
    this.setEvm(evm);
    this.setProvider(provider);
    this.setHandleClick(() => requestAccounts(provider));
    this.setContract(factory.attach(contractAddress));
  };

  handleNetworkChange = handleNetworkChange;

  detectEth = () => {
    let data: useEthereumData_v2 = {
      connectMetamaskMessage: NoizApp_v2.CONNECT_METAMASK,
      contractAddress: "",
      metamaskNotInstalled:
        NoizApp_v2.METAMASK_NOT_INSTALLED,
    };
    detect(window, detectEthereumProvider)
      .then(metamask => {
        this.setMetamask(metamask);
        this.setIsMetamask(true);
      })
      .catch(() =>
        this.setButtonMess(data.metamaskNotInstalled)
      );
  };

  didUpdate = (
    _: Readonly<NoizApp_v2Props>,
    prevState: Readonly<NoizApp_v2State>,
    __?: any
  ) => {
    const currScheme = this.state.prefersColorScheme;
    const prevScheme = prevState.prefersColorScheme;
    const currMetamask = this.state.isMetamask;
    const prevMetamask = prevState.isMetamask;
    const themes = this.themes;
    // CONDITIONS
    const prefsScheme_c = currScheme !== prevScheme;
    const isMetamask_c = currMetamask !== prevMetamask;
    // EXECUTIONS
    prefsScheme_c && this.setTheme(themes[currScheme]);
    isMetamask_c && console.log("metamask changed");
  };

  didMount() {
    this.detectEth();
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
        .matches
    ) {
      this.setPrefersColorScheme("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        const newColorScheme = event.matches
          ? "dark"
          : "light";
        this.setPrefersColorScheme(newColorScheme);
      });
  }
  // debugState = true;
  // debugUpdate = true;
}
