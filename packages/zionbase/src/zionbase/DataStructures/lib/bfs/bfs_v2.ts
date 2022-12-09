interface BasicNode<T> {
  children: BasicNode<T>[];
}

interface graph<N> {
  nodes: N[];
  curr: N;
  root: N;
}

export function traverseBfs<T, N extends BasicNode<T>>(
  graph: graph<N>
) {
  return function (proc: (node: N) => {}) {
    graph.nodes = [graph.root];
    while (graph.nodes.length) {
      let curr = graph.nodes.shift();
      if (!curr) return;
      graph.curr = curr;
      pushChildren.bind(graph)(graph.curr, graph.nodes);
      proc(graph.curr);
    }
    return graph;
  };
}

function pushChildren<T, N extends BasicNode<T>>(
  graph: graph<N>
) {
  if (graph.curr.children) {
    graph.curr.children.forEach(c =>
      graph.queue.push(c as N)
    );
  }
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
  traverseBfs(graph: graph<N>) {
    return function (proc: ((node: N) => N)[]) {
      this.queue = [graph.root];
      while (this.queue.length) {
        let curr = this.queue.shift();
        if (!curr) return;
        this.curr = curr;
        pushChildren.bind(graph)(graph.curr, this.queue);
      }
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
