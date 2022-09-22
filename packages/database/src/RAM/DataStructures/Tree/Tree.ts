import { File } from "./File.js";
import { Folder } from "./Folder.js";
import { Root } from "./Root.js";
import { ITreeNode, TreeNode } from "./TreeNode.js";
import { node } from "@zionstate/utils";

// TODO aggiunto per zittare ts
const { util } = node;
const { zionUtil: zu } = util;
const zionUtil = zu.zionUtil;
export type TTTT = ITreeNode;

export interface ITree {
  id: number;
  get nodes(): (File | Root | Folder | TreeNode)[];
  add(node: File | Root | Folder | TreeNode): ITree;
  remove(nodeToRemove: File | Root | Folder | TreeNode): number;
  isPresent(nodoDaControllare: File | Root | Folder | TreeNode): boolean;
  // TODO #2 mettere a posto fidnByLeverl()
  findByLevel(depth: number): (File | Root | Folder | TreeNode)[];
}

export class Tree implements ITree {
  static #trees: Tree[] = [];
  #nodes: (File | Root | Folder | TreeNode)[] = [];
  get nodes() {
    let servedArray: (File | Root | Folder | TreeNode)[] = [];
    this.#nodes.forEach((node) => servedArray.push(node));
    Object.freeze(servedArray);
    return servedArray;
  }
  id: number;
  get size(): number {
    return this.#nodes.length;
  }
  constructor(nodes: TreeNode[] = []) {
    nodes.forEach((node) => this.#nodes.push(node));
    Tree.#trees.push(this);
    this.id = Tree.#trees.length;
  }
  add(node: File | Root | Folder | TreeNode) {
    if (!node) throw new Error("non è stato fornito alcun nodo da aggiungere");
    if (Array.isArray(node)) throw new Error("È stato fornito un array.");
    let condition =
      node.constructor !== File &&
      node.constructor !== Root &&
      node.constructor !== Folder &&
      node.constructor !== TreeNode;
    const error1: string = "Non è stato fornito un oggetto di tipo TreeNode";
    if (condition) throw new Error(error1);
    this.#nodes.push(node);
    return this;
  }
  remove(nodeToRemove: File | Root | Folder | TreeNode) {
    const errMess1 = "Non è stato fornito alcun nodo da rimuovere";
    const errMess2 = "È stato fornito un array.";
    const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
    if (!nodeToRemove) throw new Error(errMess1);
    if (Array.isArray(nodeToRemove)) throw new Error(errMess2);
    if (nodeToRemove.constructor !== TreeNode) throw new Error(errMess3);
    const find = (node: TreeNode) => node.name === nodeToRemove.name;
    const indiceDelNodoDaRimuovere = this.#nodes.findIndex(find);
    if (indiceDelNodoDaRimuovere + 1 !== this.#nodes.length)
      zionUtil.changePosition(
        this.#nodes,
        indiceDelNodoDaRimuovere,
        this.#nodes.length - 1
      );
    this.#nodes.pop();
    return indiceDelNodoDaRimuovere;
  }
  isPresent(nodoDaControllare: File | Root | Folder | TreeNode) {
    const errMess1 = "Non è stato fornito alcun nodo da controllare";
    const errMess2 = "È stato fornito un array.";
    const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
    if (!nodoDaControllare) throw new Error(errMess1);
    if (Array.isArray(nodoDaControllare)) throw new Error(errMess2);
    if (nodoDaControllare.constructor !== TreeNode) throw new Error(errMess3);
    const find = (node: TreeNode) => node.name === nodoDaControllare.name;
    const result = this.#nodes.findIndex(find);
    return result === -1 ? false : true;
  }
  find(nodoDaCercare: File | Root | Folder | TreeNode) {
    const errMess1 = "Non è stato fornito alcun nodo da cercare";
    const errMess2 = "È stato fornito un array.";
    const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
    if (!nodoDaCercare) throw new Error(errMess1);
    if (Array.isArray(nodoDaCercare)) throw new Error(errMess2);
    if (nodoDaCercare.constructor !== TreeNode) throw new Error(errMess3);
    return this.#nodes.find((node) => node.name === nodoDaCercare.name);
  }
  findByLevel(depth: number): (File | Root | Folder | TreeNode)[] {
    let servedArray: (File | Root | Folder | TreeNode)[] = [];
    const forEach = (node: TreeNode) => {
      if (node.depth === depth) servedArray.push(node);
    };
    this.#nodes.forEach(forEach);
    return servedArray;
  }
}

export abstract class BinaryTree extends Tree {
  constructor(nodes: TreeNode[]) {
    super(nodes);
  }
  findMin() {}
  findMax() {}
}
