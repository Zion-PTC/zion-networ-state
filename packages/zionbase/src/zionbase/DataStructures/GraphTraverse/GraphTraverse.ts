import {
  BinaryTree,
  TupleBinaryTree,
} from "../Graph/Tree/Trees";

export type IGraphTraverse = {
  graph: BinaryTree | TupleBinaryTree;
};

export class GraphTraverse {
  root: BinaryTree;
  constructor(root: BinaryTree) {
    this.root = root;
  }
}
