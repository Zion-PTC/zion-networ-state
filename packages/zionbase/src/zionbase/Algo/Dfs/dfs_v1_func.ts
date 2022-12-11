import { BinaryTree } from "../../DataStructures/Graph/Tree/Trees";
// import { GraphTraverse } from "../../GraphTraverse";
// @ts-expect-error
export class DFS extends GraphTraverse {
  traverseDFS() {
    // @ts-expect-error
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
