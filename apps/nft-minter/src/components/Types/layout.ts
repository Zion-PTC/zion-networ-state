import { IEVMweb } from "@zionstate/database/EVM";
import { Theme } from "./theme";

export type ILayout = (props: LayoutProps) => JSX.Element;

export type LayoutProps = {
  children: JSX.Element | string | JSX.Element[];
  landing?: boolean;
  connect?: boolean;
  nft?: boolean;
  navbar?: React.MutableRefObject<HTMLDivElement>;
  footer?: React.MutableRefObject<HTMLDivElement>;
  contentArea?: React.MutableRefObject<HTMLDivElement>;
  handleClick?: () => void;
  backToTopHandleClick?: () => void;
  showButton: boolean;
  metamask: {
    buttonMess: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    evm: IEVMweb | undefined;
  };
  theme: Theme;
  isLightTheme: boolean;
};
