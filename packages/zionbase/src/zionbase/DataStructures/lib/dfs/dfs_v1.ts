import { BinaryTree } from "../../Graph/Tree/Trees";
import { GraphTraverse } from "../../GraphTraverse";

export class DFS extends GraphTraverse {
  traverseDFS() {
    let stack: BinaryTree[] = [this.root];
    let res: string[] = [];
    while (stack.length) {
      let curr = stack.pop();
      if (curr) {
        res.push(curr.key);
        if (curr.right) {
          stack.push(curr.right);
        }
        if (curr.left) {
          stack.push(curr.left);
        }
      }
    }
    return res.reverse();
  }
}

export function traverseDFS(root: BinaryTree) {
  let stack: BinaryTree[] = [root];
  let res: string[] = [];
  while (stack.length) {
    let curr = stack.pop();
    if (curr) {
      res.push(curr.key);
      if (curr.right) {
        stack.push(curr.right);
      }
      if (curr.left) {
        stack.push(curr.left);
      }
    }
  }
  return res.reverse();
}
