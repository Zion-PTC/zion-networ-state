import { BinaryTree, BinaryTreeTuple } from "../Trees";

export type IGraphTraverse = {
  graph: BinaryTree | BinaryTreeTuple;
};

export class GraphTraverse {
  root: BinaryTree;
  constructor(root: BinaryTree) {
    this.root = root;
  }
}
