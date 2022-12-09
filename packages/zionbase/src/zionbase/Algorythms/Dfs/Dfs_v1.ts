export interface IDfs_v1 {
  name: string;
}

export interface Dfs_v1 {
  name: string;
}

export class Dfs_v1 implements IDfs_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Dfs_v1Ctor = {
  new (name: string): Dfs_v1;
};

export const Dfs_v1Ctor: Dfs_v1Ctor = Dfs_v1;
