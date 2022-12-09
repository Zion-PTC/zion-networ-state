export interface graph<N> {
  nodes: N[];
}

export interface BasicNode<I = number, T = {}> {
  id: I;
  children: BasicNode<I, T>["id"][];
  value: T;
}

export interface processor<T> {
  (e: T): T;
}

export interface commonProps<N> {
  thiscurr: N;
  processors: processor<N>[];
  treat: (p: processor<N>) => void;
}
