import { BinaryTree } from "../../Graph/Tree/Trees";
import { GraphTraverse } from "../../GraphTraverse";

export class BFS extends GraphTraverse {
  traverseBFS() {
    let queue: BinaryTree[] = [this.root];
    let res: string[] = [];
    while (queue.length) {
      let curr = queue.shift();
      if (curr) {
        res.push(curr.key);
        if (curr.right) {
          queue.push(curr.right);
        }
        if (curr.left) {
          queue.push(curr.left);
        }
      }
    }
    return res;
  }
}

export function traverseBFS(root: BinaryTree) {
  let queue: BinaryTree[] = [root];
  let res: string[] = [];
  while (queue.length) {
    let curr = queue.shift();
    if (curr) {
      res.push(curr.key);
      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
    }
  }
  return res;
}

type middleWare = (curr: BinaryTree) => void;

export type traverseBFSmiddleware = (
  root: BinaryTree,
  middleWare: middleWare
) => string[];

export const traverseBFSmiddleware: traverseBFSmiddleware =
  function (root, middleWare) {
    let queue: BinaryTree[] = [root];
    let res: string[] = [];
    while (queue.length) {
      let curr = queue.shift();
      if (curr) {
        res.push(curr.key);
        if (curr.right) {
          queue.push(curr.right);
        }
        if (curr.left) {
          queue.push(curr.left);
        }
        middleWare(curr);
      }
    }
    return res;
  };

export function traverseBFSmiddlewares(
  root: BinaryTree,
  middleWares: middleWare[]
) {
  let queue: BinaryTree[] = [root];
  let res: string[] = [];
  while (queue.length) {
    let curr = queue.shift();
    if (curr) {
      res.push(curr.key);
      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      middleWares.forEach(mw => mw(curr as BinaryTree));
    }
  }
  return res;
}
