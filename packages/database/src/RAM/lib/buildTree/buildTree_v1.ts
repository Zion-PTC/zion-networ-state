import { node } from "@zionstate/zionbase/utils";
import fs from "fs";
import { System, system } from "../../../FileSystem";
import {
  Folder,
  Root,
  Tree,
  TreeNode,
  File,
} from "../../DataStructures";

export interface IbuildTree_v1 {
  (a: any): any;
}

const zionUtil = node.util.zionUtil;

export const buildTree_v1: IbuildTree_v1 = function () {};

/**
 * @title buildTree()
 * @param {String} rootPath  rootPath is the starting
 * point from which the function will build a Directory
 * Structure Object.
 * @returns {Tree} returns a complete Tree starting from the rootPath
 */
export function buildTree(
  this: System,
  rootPath: string
): Tree | undefined {
  let newTree = new Tree();
  let _types = ["Folder", "File"];
  let nodes: TreeNode[] = [];
  let typeNumber = system.getTreeNodeType(rootPath);
  let name;
  if (TreeNode.types[typeNumber]) {
    const types = TreeNode.types;
    const type = types[typeNumber];
    if (!type) throw new Error("");
    name = this.setNameForTreeNode(rootPath, type);
  }
  let root;
  if (name) {
    root = new Root(
      name,
      rootPath,
      typeNumber,
      undefined,
      0
    );
    root.path = rootPath;
    root.typeNumber = typeNumber;
    root.treeId = undefined;
    root.depth = 0;
  }
  if (!root) throw new Error("No root give");
  newTree.add(root);
  const stack: (Root | File | Folder | TreeNode)[] = [
    root,
  ];
  while (stack.length) {
    let currentNode = stack.pop();
    if (currentNode) {
      if (!currentNode.path) throw new Error("no path");
      const popFirst = zionUtil.popFirst;
      let children = fs.readdirSync(currentNode.path);
      let DSStore = system.blackListFileNames[0];
      if (children[0] === DSStore) popFirst(children);
      for (let child of children) {
        const setName = this.setNameForTreeNode;
        let childPath = `${currentNode.path}/${child}`;
        let type = system.getTreeNodeType(childPath);
        if (!TreeNode) return;
        const types = TreeNode.types;
        if (!types) return;
        const type_ = types[type];
        if (!type_) return;
        let name = setName(childPath, type_);
        let childNode: File | Folder;
        if (!name) throw new Error("No name");
        const currDepth = currentNode.depth;
        if (!currDepth) throw new Error("no depth");
        if (_types[type] === _types[0]) {
          childNode = new Folder(
            name,
            childPath,
            type,
            newTree.id,
            currDepth + 1
          );
          nodes.push(childNode);
        } else {
          childNode = new File(
            name,
            childPath,
            type,
            newTree.id,
            currDepth + 1,
            this.getFileExtension(childPath),
            this.getFileSize(childPath)
            // extension
          );
          childNode.depth = currDepth + 1;
          nodes.push(childNode);
        }
        currentNode.connettiAFiglio(childNode);
        if (!childNode.path) throw new Error("no path");
        if (system.getTreeNodeType(childNode.path) === 0) {
          childNode.type = _types[0];
          stack.push(childNode);
        } else {
          childNode.type = _types[1];
        }
        if (currentNode.children)
          currentNode.children.push(childNode);
      }
    }
  }
  // creando un tree con l'array di TreeNodes si crea un
  // legame per il quale aggiungendo un elemento al
  const addNode = function (node: TreeNode) {
    newTree.add(node);
  };
  nodes.forEach(addNode);
  return newTree;
}
