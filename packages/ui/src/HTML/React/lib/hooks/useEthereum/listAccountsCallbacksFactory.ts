import { Dispatch, SetStateAction } from "react";

export interface ListAccountsCallbacksFactory {
  (setIsConnected: Dispatch<SetStateAction<boolean>>): (
    // TODO definire meglio
    accounts: any[]
  ) => void;
}

export const listAccountsCallbacksFactory: ListAccountsCallbacksFactory =
  function (setIsConnected: Dispatch<SetStateAction<boolean>>) {
    return function (accounts) {
      if (!accounts.length) setIsConnected(false);
      if (accounts.length) setIsConnected(true);
    };
  };
