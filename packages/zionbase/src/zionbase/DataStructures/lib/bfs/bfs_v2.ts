interface BasicNode<T> {
  children: BasicNode<T>[];
}

interface graph<N> {
  nodes: N[];
  curr: N;
  root: N;
}

export interface IBfs_v2<T, N extends BasicNode<T>> {
  queue: N[];
  curr: N;
  root: N;
}

export interface Bfs_v2<T, N extends BasicNode<T>> {
  queue: N[];
  curr: N;
  root: N;
}

export class Bfs_v2<T, N extends BasicNode<T>>
  implements IBfs_v2<T, N>
{
  reduce = (_: (node: N) => N, curr: (node: N) => N) => {
    this.curr = curr(this.curr);
  };
  traverseBfs(graph: graph<N>) {
    this.queue = [graph.root];
    while (this.queue.length) {
      let curr = this.queue.shift();
      if (!curr) return;
      this.curr = curr;
      this.queue.push(curr);
    }
    return function (proc: ((node: N) => N)[]) {
      proc.reduce(this.reduce);
      return graph;
    };
  }
}

export type Bfs_v2Ctor<
  T = {},
  N extends BasicNode<T> = BasicNode<T>
> = {
  new (): Bfs_v2<T, N>;
};

export const Bfs_v2Ctor: Bfs_v2Ctor = Bfs_v2;
