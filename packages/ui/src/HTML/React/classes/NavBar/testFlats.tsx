import { ReactNode } from "react";

type SmallePropsData = {
  age: number;
};
type SmallePropsBooleans = { total?: boolean };

type SmalleProps = NoizDatas<
  SmallePropsData,
  SmallePropsBooleans,
  {}
>;

type FCPropsFlat = {
  datas: {
    dataId: "FC";
    name: string;
    onClick: () => void;
  }[];
  type?: { primary?: boolean };
  primary?: boolean;
  css?: string;
  className?: string;
  children?: ReactNode;
};

type Client1PropsFlat_v1 = {
  datas: {
    name: string;
    onClick: () => void;
  }[];
  type?: {
    exotic?: boolean;
  };
  exotic?: boolean;
  css?: string;
  className?: string;
  children?: ReactNode;

  Smalle: {
    datas: {
      age: number;
    }[];
  };
  FC: {
    datas: {
      dataId: "FC";
      name: string;
      onClick: () => void;
    }[];
  };
};

type Client2Props = {
  datas: { text: string }[];
  main?: boolean;
  css?: string;
  className?: string;
  children?: ReactNode;

  Client1: {
    datas: {
      name: string;
      onClick: () => void;
    }[];

    Smalle: {
      datas: {
        age: number;
      }[];
    };

    FC: {
      datas: {
        dataId: "FC";
        name: string;
        onClick: () => void;
      }[];
    };
  };
};
