import { TreeNode, ITreeNode } from "./TreeNode.js";

export interface IFolder extends ITreeNode {
  depth: number;
}

export class Folder extends TreeNode implements ITreeNode, IFolder {
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.depth;
  }
  isFolder(): boolean {
    return this.constructor === Folder;
  }
}
