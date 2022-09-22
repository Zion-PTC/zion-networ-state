// import {} from "@zionstate/database";

export async function detect(
  window: Window & { ethereum?: any },
  detectEthereumProvider: () => Promise<any>
) {
  if (window.ethereum) {
    const metamask = await detectEthereumProvider();
    return metamask;
  } else throw new Error("no metamask");
}
