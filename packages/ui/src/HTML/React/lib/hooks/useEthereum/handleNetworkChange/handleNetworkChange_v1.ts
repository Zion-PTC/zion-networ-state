// TODO define arguments
export function handleNetworkChange_v1(
  newNetwork: any,
  oldNetwork: any
) {
  if (oldNetwork)
    console.log(
      "switched from: " +
        oldNetwork.name +
        " to " +
        newNetwork.name
    );
  else console.log(newNetwork.name);
}
