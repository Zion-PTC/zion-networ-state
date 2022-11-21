export type Constructor = new (...arg: any[]) => {};
export type GConstructor<T> = new (...arg: any[]) => T;

export type mixin = <T extends { [key: string]: any }, X extends any>(
  a: GConstructor<T>
) => GConstructor<T & X>;
