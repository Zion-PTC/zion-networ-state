import {
  AdjacencyMatrix,
  findAdjacentNodesType,
  IMatrixGraph,
  isConnectedType,
  MatrixGraphArgs,
  MatrixGraphCtor,
  NodeIndexes,
  NodesKeys,
} from "../../Types/DataStructures/Graph";
import { findAdjacentNodes, isConnected } from "../lib";

export const MatrixGraph: MatrixGraphCtor = class implements IMatrixGraph {
  nodes: NodesKeys;
  adjacencyMatrix: AdjacencyMatrix;
  nodeIndexes: NodeIndexes;
  constructor(args: MatrixGraphArgs) {
    this.nodes = args.nodes;
    this.adjacencyMatrix = args.adjacencyMatrix;
    this.nodeIndexes = args.nodeIndexes;
    this.isConnected = isConnected;
    this.findAdjacentNodes = findAdjacentNodes;
  }
  findAdjacentNodes: findAdjacentNodesType;
  isConnected: isConnectedType;
};
