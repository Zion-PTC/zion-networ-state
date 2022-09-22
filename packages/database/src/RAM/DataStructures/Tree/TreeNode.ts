export namespace TreeNodeTs {
  export type RequiredFields = {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
  };
  export type OptionalFields = {
    genitore?: TreeNode[];
    figlio?: TreeNode[];
    depth?: number;
    children?: TreeNode[];
    root?: boolean;
    type?: string;
    id?: number;
  };
}

export interface ITreeNode {
  name: string;
  path: string;
  typeNumber: number;
  treeId: unknown;
  depth: number;
  genitore?: ITreeNode[];
  figlio?: ITreeNode[];
  root?: boolean;
  type?: string;
  id?: number;
  stringedDir?: string | undefined;
  _isLastChild?: boolean;
  toStringedTree(): string;
  stringedName(
    name: string,
    type: unknown,
    depth: number,
    folders: string[][],
    string: string,
    folderId: number,
    nomeDeiFileInNodeChildren: string[],
    _isLastChild: boolean | undefined,
    isRoot: boolean
  ): { _string: string; _folders: string[][]; _folderId: number };
  connettiAGenitore(node: TreeNode): ITreeNode;
  connettiAFiglio(node: TreeNode): ITreeNode;
  isRoot(): boolean;
  isFolder(): boolean;
  trovaSiblings(): ITreeNode[];
  trovaFigli(): ITreeNode[] | string;
  trovaGenitore(): ITreeNode | undefined;
}

export class TreeNode implements ITreeNode {
  static #types: ("Folder" | "File")[] = ["Folder", "File"];
  static #treeNodes: TreeNode[] = [];
  static get treeNodes() {
    return TreeNode.#treeNodes;
  }
  static get types() {
    return this.#types;
  }
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number,
    public genitore?: ITreeNode[],
    public figlio?: ITreeNode[],
    public children?: TreeNode[],
    public root: boolean = false,
    public type?: string,
    public id?: number,
    public stringedDir?: string,
    public _isLastChild?: boolean
  ) {
    this.name = name;
    this.path = path;
    this.genitore = [];
    this.figlio = [];
    this.type = TreeNode.#types[typeNumber];
    this.children = [];
    TreeNode.#treeNodes.push(this);
    this.id = TreeNode.length;
    this.treeId = treeId;
  }
  toStringedTree = (): string => {
    let string: string,
      stack: TreeNode[] = [this],
      treeStrings: string[] = [],
      folders: string[][] = [],
      folderId = -1,
      stringedTree: string = "";

    while (stack.length) {
      let currentNode = stack.pop(),
        nomeDeiFileInNodeChildren: string[] = [];

      if (!currentNode) return "no current node";

      if (currentNode.children) {
        let children = currentNode.children;
        // children.reverse();

        for (let child of children) {
          nomeDeiFileInNodeChildren.push(child.name);
          stack.push(child);
        }
      }

      string = "";
      let { _string, _folders, _folderId } = this.stringedName(
        currentNode.name,
        currentNode.type,
        currentNode.depth,
        folders,
        string,
        folderId,
        nomeDeiFileInNodeChildren,
        currentNode._isLastChild,
        currentNode.isRoot()
      );

      string = _string;
      folderId = _folderId;
      folders = _folders;
      currentNode.stringedDir = string;
      treeStrings.push(string);
    }

    stringedTree = treeStrings.join("");

    return stringedTree;
  };
  stringedName = (
    name: string,
    type: unknown,
    depth: number,
    folders: string[][],
    string: string,
    folderId: number,
    nomeDeiFileInNodeChildren: string[],
    _isLastChild: boolean | undefined,
    isRoot: boolean
  ): { _string: string; _folders: string[][]; _folderId: number } => {
    let tab = `\n`,
      pattern: string = "",
      counter: number = 0,
      _string: string,
      _folders: string[][],
      _folderId: number;

    if (depth === 1) pattern = "  ";
    if (depth > 1) pattern = "│ ";

    while (depth) {
      depth--;
      counter++;
      if (counter === 1) pattern = "  ";
      if (counter !== 1) pattern = "│ ";
      tab = tab + pattern;
    }

    if (type === TreeNode.#types[0]) {
      folders.push(nomeDeiFileInNodeChildren);
      if (isRoot) string = `${tab}└─┬${name}`;
      else string = `${tab}├─┬${name}`;
      folderId++;
    }

    if (type === TreeNode.#types[1]) {
      // TODO fix typescript error due to mismatch with object
      // members. Add a Generic to the types
      // @ts-expect-error
      if (name === folders[folderId][folders[folderId].length - 1])
        string = `${tab}├──${name}`;
      else string = `${tab}└──${name}`;
    }

    _string = string;
    _folders = folders;
    _folderId = folderId;

    return { _string, _folders, _folderId };
  };
  connettiAGenitore(node: TreeNode) {
    if (this.genitore) this.genitore.push(node);
    return this;
  }
  connettiAFiglio(node: TreeNode) {
    if (this.figlio) this.figlio.push(node);
    node.connettiAGenitore(this);
    return this;
  }
  isRoot() {
    if (this.root) return true;
    else return false;
  }
  isFolder(): boolean {
    return false;
  }
  trovaSiblings() {
    if (this.isRoot()) throw new Error("Il nodo root non ha Siblings");
    let servedArray: TreeNode[] = [];

    // this.genitore[0].figlio;
    TreeNode.#treeNodes.forEach((treeNode) => {
      if (!treeNode.genitore) return;
      if (!this.genitore) return;
      if (!treeNode.genitore[0]) return;
      // TODO fix typescript error due to mismatch with object
      // members. Add a Generic to the types
      // @ts-expect-error
      if (treeNode.genitore[0].name === this.genitore[0].name) {
        // console.log(treeNode.genitore[0]);
        servedArray.push(treeNode);
      }
    });
    return servedArray;
  }
  trovaFigli() {
    if (this.type === TreeNode.#types[1])
      throw new Error("I file non hanno figli");
    let servedArray: ITreeNode[] = [];
    if (!this.figlio) return "no figlio";
    this.figlio.forEach((child) => {
      if (!child) return;
      servedArray.push(child);
    });
    Object.freeze(servedArray);
    return servedArray;
  }
  trovaGenitore() {
    if (this.isRoot()) throw new Error("Il nodo root non ha genitori");
    if (this.genitore) return this.genitore[0];
  }
}
