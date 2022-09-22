// import { Size } from '../../GenerativeArtMachine/Size.js';
import { TreeNode, ITreeNode } from "./TreeNode.js";

export interface IFile extends ITreeNode {
  extension?: string;
  fileSize?: number;
}

export class File extends TreeNode implements ITreeNode, IFile {
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number,
    public extension?: string,
    public fileSize?: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    delete this.children;
    this.extension = extension;
    this.fileSize = fileSize; // MB size of file
  }
}
// TODO #1 estendere file a immagine
// class Image extends File {
//   constructor(name, path, type, width, height) {
//     super(name, path, type);
//     this.size = new Size(width, height);
//   }
// }
