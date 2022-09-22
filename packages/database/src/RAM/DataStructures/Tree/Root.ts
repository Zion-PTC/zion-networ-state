import { TreeNode, ITreeNode } from "./TreeNode.js";

export interface IRoot extends ITreeNode {
  root: boolean;
}

export class Root extends TreeNode implements ITreeNode, IRoot {
  static #roots: TreeNode[] = [];
  #type = "root";
  constructor(
    name: string,
    path: string,
    typeNumber: number,
    treeId: unknown,
    depth: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.root = true;
    // TODO aggiunto per zittare ts
    this.#type;
    Root.#roots.push(this);
  }
}
