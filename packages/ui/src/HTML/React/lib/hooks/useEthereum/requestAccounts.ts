export function requestAccounts(provider: any) {
  return async () => {
    await provider.send("eth_requestAccounts", []);
  };
}
