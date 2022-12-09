export interface ITree_v1 {
  name: string;
}

export interface Tree_v1 {
  name: string;
}

export class Tree_v1 implements ITree_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Tree_v1Ctor = {
  new (name: string): Tree_v1;
};

export const Tree_v1Ctor: Tree_v1Ctor = Tree_v1;
