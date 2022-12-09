interface BasicNode {
  children: any[];
  name: string;
}

export function traverseBfs<
  T extends BasicNode,
  R extends string
>(root: T, res: R[]) {
  return function (cb: (node: BasicNode) => {}) {
    let queue: BasicNode[] = [root];
    while (queue.length) {
      let curr = queue.shift();
      if (curr) {
        pushChildren(curr, queue);
        cb(curr);
      }
    }
  };
}
function pushChildren(
  curr: BasicNode,
  queue: BasicNode[]
) {
  if (curr.children) {
    curr.children.forEach(c => queue.push(c));
  }
}

export interface IBfs_v2 {
  name: string;
}

export interface Bfs_v2 {
  name: string;
}

export class Bfs_v2 implements IBfs_v2 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Bfs_v2Ctor = {
  new (name: string): Bfs_v2;
};

export const Bfs_v2Ctor: Bfs_v2Ctor = Bfs_v2;
