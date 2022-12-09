interface BasicNode<I = number, T = {}> {
  id: I;
  children: BasicNode<T>[];
}

interface graph<N> {
  nodes: N[];
  curr: N;
  root: N;
}

export interface IBfs_v1<T, N extends BasicNode<T>> {
  queue: N[];
  curr: N;
  root: N;
}

export interface Bfs_v1<T, N extends BasicNode<T>> {
  queue: N[];
  curr: N;
  root: N;
}

export class Bfs_v1<T, N extends BasicNode<T>>
  implements IBfs_v1<T, N>
{
  process = (processor: (node: N) => N) => {
    this.curr = processor(this.curr);
  };
  traverseBfs(graph: graph<N>) {
    this.queue = [graph.root];
    while (this.queue.length) {
      let curr = this.queue.shift();
      if (!curr) return;
      this.curr = curr;
      this.queue.push(curr);
    }
    return function (
      this: Bfs_v1<T, N>,
      proc: ((node: N) => N)[]
    ) {
      proc.forEach(this.process);
      return graph;
    };
  }
}

export type Bfs_v1Ctor<
  T = {},
  N extends BasicNode<T> = BasicNode<T>
> = {
  new (): Bfs_v1<T, N>;
};

export const Bfs_v1Ctor: Bfs_v1Ctor = Bfs_v1;
