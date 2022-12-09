import { Bfs } from "../zionbase";

console.log(Bfs);

interface ValueType {
  name: string;
}
const bfs = new Bfs<number, ValueType, Node_v1>();

interface Node_v1 {
  type?: string;
  id: number;
  children: Node_v1["id"][];
  value: ValueType;
}

const node1: Node_v1 = {
  type: "root",
  children: [1],
  id: 0,
  value: { name: "1" },
};
const node2: Node_v1 = {
  children: [4, 2],
  id: 1,
  value: { name: "2" },
};
const node3: Node_v1 = {
  children: [3],
  id: 2,
  value: { name: "3" },
};
const node4: Node_v1 = {
  children: [],
  id: 3,
  value: { name: "4" },
};
const node5: Node_v1 = {
  children: [],
  id: 4,
  value: { name: "5" },
};

const graph = {
  nodes: [node1, node2, node3, node4, node5],
  root: 0,
};

const proc1: (c: Node_v1) => Node_v1 = (curr: Node_v1) => {
  curr.value.name = curr.value.name + "_done";
  console.log(curr.value.name);
  return curr;
};

const bot = bfs.traverse().use(proc1).process(graph);

if (!bot?.nodes[0]) throw new Error("");

console.log(bot.nodes[0].value);
