import { INode } from "../../Types/DataStructures/Graph";

export class Node implements INode {
  edges?: string[] | (0 | 1)[] | undefined;
  constructor(public key: string) {}
  isConnected(node: string): boolean {
    return this.edges?.some((edge) => edge === node) ? true : false;
  }
}
