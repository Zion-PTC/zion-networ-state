type EncodedId = string;

type basicProps<T = unknown> = { node: EncodedId } & T;
type connectType<T> = (props: basicProps) => T;

type isConnectedType = (props: basicProps) => boolean;

type findAdjacentNodes = () => EncodedId[];

export interface INode_v2 {
  id: EncodedId;
  edges: EncodedId[];
  connect: connectType<this>;
  isConnected: isConnectedType;
  findAdjacentNodes: findAdjacentNodes;
}

export interface Node_v2 {
  id: EncodedId;
  edges: EncodedId[];
}

export interface Node_v2Props {
  id: EncodedId;
}

export class Node_v2 implements INode_v2 {
  constructor(props: Node_v2Props) {
    this.id = props.id;
    this.edges = [];
  }
  connect(props: basicProps) {
    const { node } = props;
    this.edges.push(node);
    return this;
  }
  isConnected(props: basicProps) {
    return this.edges.some(edge => edge === props.node)
      ? true
      : false;
  }
  findAdjacentNodes() {
    return this.edges;
  }
}

export type Node_v2Ctor = {
  new (props: Node_v2Props): Node_v2;
};

export const Node_v2Ctor: Node_v2Ctor = Node_v2;
