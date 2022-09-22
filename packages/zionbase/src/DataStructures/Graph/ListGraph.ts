import { IListGraphConstructor, INode } from "../../Types/DataStructures/Graph";
import { GraphArguments } from "../../Types/DataStructures/IGraph";

export const ListGraph: IListGraphConstructor = class {
  nodes: INode[];
  constructor(public args: GraphArguments) {
    this.nodes = args.nodes;
  }
  add(node: INode) {
    this.nodes.push(node);
    return this;
  }
};
