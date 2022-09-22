export function ramArray<T extends { name: string }>(name: string, array: T[]) {
  return array.find((user) => (user.name = name)) ? true : false;
}
