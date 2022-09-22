import fs from "fs";
import path, { dirname, extname } from "path";
import { fileURLToPath } from "url";
import { Abortable } from "events";

// import { zionUtil } from "@zionstate_node/zion-util";
// import { ZionError } from "@zionstate_js/error";
import { ITree, Tree } from "../RAM/DataStructures/Tree/Tree.js";
import { TreeNode, ITreeNode } from "../RAM/DataStructures/Tree/TreeNode.js";
import { Root, IRoot } from "../RAM/DataStructures/Tree/Root.js";
import { Folder, IFolder } from "../RAM/DataStructures/Tree/Folder.js";
import { File, IFile } from "../RAM/DataStructures/Tree/File.js";
import { js, node } from "@zionstate/utils";

const { ZionError: ze } = js;
const { ZionError } = ze;
const { util } = node;
const { zionUtil: zu } = util;
const zionUtil = zu.zionUtil;

export const JOINPATHSERROR = "arguments must be of type string[]";

export type Dirent = fs.Dirent;
export class System {
  #blackListFileNames = [".DS_Store"];
  get blackListFileNames() {
    return this.#blackListFileNames;
  }
  get folders(): string[] {
    return this.folders;
  }
  get files(): string[] {
    return this.files;
  }
  setNameForTreeNode = (
    path: string,
    type: "root" | "File" | "Folder"
  ): string | undefined => {
    if (type === "root") {
      let match = path.match(/\w+$/g);
      if (!match) return "no match";
      if (match[0]) return match[0];
    }
    if (type === TreeNode.types[0]) {
      let match = path.match(/\w+$/g);
      if (!match) return "no match";
      if (match[0]) return match[0];
    } else {
      let jointSpacesPath = path.replace(/ /g, "_");
      let res = jointSpacesPath.match(/(?<=[/])\w*[.]\w*/g);
      if (!res) return "no match";
      if (res[0]) return res[0];
    }
  };
  /**
   * @param {String} path percorso target
   * @returns {String[]} ritorna un array contenente la
   * lista dei nomi delle carelle contenute nel percorso
   * target.
   */
  arrayOfFoldersInDirectory = (path: string) => {
    return fs
      .readdirSync(path, {
        withFileTypes: true,
      })
      .filter(
        // vengono esclusi i risultati che contengono un '.'
        // in quanto si tratta di nomi di files e non
        // di cartelle
        (directoryEntity) => directoryEntity.isDirectory()
      );
  };
  /**
   * @param {String} path target path
   * @returns {}  an array of name of the files contained in
   * the target path
   */
  arrayOfNamesOfFilesInFolder = (
    path: string
  ): { name: string; path: string }[] => {
    return fs
      .readdirSync(path)
      .filter((item) => !/(^|\/)\.['\/\.]/g.test(item))
      .map((fileName) => {
        return {
          name: fileName,
          path: `${path}/${fileName}`,
        };
      });
  };
  /**
   * @param {String} importMetaUrl  data which can be
   * retrieved with in the callee file by typing
   * import.meta.url.
   * @returns {String}  the complete path to the file from
   * which this function is called.
   */
  pathOfFileFromImportMetaUrl = (importMetaUrl: string) => {
    return `${dirname(fileURLToPath(importMetaUrl))}`;
  };
  /**
   *
   * @param {String} targetPath path with filename included
   * @param {String} data data to be written in the file
   * @returns
   */
  writeJson(
    targetPath: string,
    data: string | NodeJS.ArrayBufferView,
    options?: fs.WriteFileOptions | undefined
  ) {
    return fs.writeFileSync(targetPath, data, options);
  }
  /**
   * @param {String} path target path with file name included
   * @param {String} data data to insert in the file
   * @returns
   */
  writePng(path: string, data: string | NodeJS.ArrayBufferView) {
    return fs.writeFileSync(path, data);
  }
  /**
   * @title createNestedDir
   * @note funzione per creare una serie di cartelle
   * @param {String} dir
   */
  createNestedDir(dir: string): string | undefined {
    //example './tmp/but/then/nested';
    if (!fs.existsSync(dir)) return fs.mkdirSync(dir, { recursive: true });
  }
  /**
   * @title buildTree()
   * @param {String} rootPath  rootPath is the starting
   * point from which the function will build a Directory
   * Structure Object.
   * @returns {Tree} returns a complete Tree starting from the rootPath
   */
  buildTree = (rootPath: string): Tree | undefined => {
    let newTree = new Tree();
    let _types = ["Folder", "File"];
    let nodes: TreeNode[] = [];
    let typeNumber = system.getTreeNodeType(rootPath);
    let name;
    if (TreeNode.types[typeNumber])
      // TODO resolve type error due to mismatch of types in
      // tree node and function build tress
      // @ts-expect-error
      name = this.setNameForTreeNode(rootPath, TreeNode.types[typeNumber]);
    let root;
    if (name) root = new Root(name, rootPath, typeNumber, undefined, 0);
    if (!root) throw new Error("No root give");
    newTree.add(root);
    const stack: (Root | File | Folder | TreeNode)[] = [root];
    while (stack.length) {
      let currentNode = stack.pop();
      if (currentNode) {
        let children = fs.readdirSync(currentNode.path);
        let DSStore = system.blackListFileNames[0];
        // TODO aggiunta variabile per zittare ts, sistemare
        DSStore;
        if (children[0] === DSStore) zionUtil.popFirst(children);
        for (let child of children) {
          let childPath = `${currentNode.path}/${child}`;
          let type = system.getTreeNodeType(childPath);
          // TODO resolve type error due to mismatch of types in
          // tree node and function build tress
          // @ts-expect-error
          let name = this.setNameForTreeNode(childPath, TreeNode.types[type]);
          let childNode: File | Folder;
          if (!name) throw new Error("No name");
          if (_types[type] === _types[0]) {
            childNode = new Folder(
              name,
              childPath,
              type,
              newTree.id,
              currentNode.depth + 1
            );
            nodes.push(childNode);
          } else {
            childNode = new File(
              name,
              childPath,
              type,
              newTree.id,
              currentNode.depth + 1,
              this.getFileExtension(childPath),
              this.getFileSize(childPath)
              // extension
            );
            childNode.depth = currentNode.depth + 1;
            nodes.push(childNode);
          }
          currentNode.connettiAFiglio(childNode);
          if (system.getTreeNodeType(childNode.path) === 0) {
            childNode.type = _types[0];
            stack.push(childNode);
          } else {
            childNode.type = _types[1];
          }
          if (currentNode.children) currentNode.children.push(childNode);
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
  };
  /**
   *
   * @param {String} path percorso target
   * @param {*} callback funzione callback senza parametri
   */
  deleteFile(path: string, callback: fs.NoParamCallback) {
    return fs.rm(path, callback);
  }
  /**
   *
   * @param {String} path percorso target
   * @param {Object} options oggetto con opzioni
   * @returns fs.rmdirSync
   */
  deleteFolder(path: fs.PathLike, options?: fs.RmDirOptions) {
    return fs.rmdirSync(path, options);
  }
  /**
   *
   * @param {String} path directory target
   * @returns fs.rmSync()
   */
  deleteRecursiveDir(path: fs.PathLike) {
    return fs.rmSync(path, { recursive: true, force: true });
  }
  /**
   *
   * @param {String} path percorso target
   * @returns fm.existsSync()
   */
  existsSync(path: fs.PathLike) {
    return fs.existsSync(path);
  }
  /**
   *
   * @param {String} path percorso target
   * @param {Object} options oggetto opzioni
   * @returns fs.StatSync()
   */
  statSync(path: fs.PathLike, options?: undefined) {
    return fs.statSync(path, options);
  }
  isFileInFolder(file: string, folder: fs.PathLike) {
    let array = fs.readdirSync(folder);
    return array.includes(file);
  }
  getTreeNodeType(path: fs.PathLike) {
    let result;
    fs.statSync(path).isDirectory() ? (result = 0) : (result = 1);
    return result;
  }
  // work on files
  getFileSize(path: fs.PathLike) {
    let size = fs.statSync(path).size;
    return size;
  }
  getFileExtension(path: string) {
    let extension = extname(path);
    return extension;
  }
  stringifyFile(
    path: string,
    options?:
      | ({
          encoding?: null | undefined;
          flag?: string | undefined;
        } & Abortable)
      | null
      | undefined
  ): string {
    return fs.readFileSync(path, options).toString();
  }
  doo(path: fs.PathLike, options?: { withFileTypes?: boolean }) {
    // TODO ts errore
    //@ts-expect-error
    if (options) return fs.readdirSync(path, options);
    else return fs.readdirSync(path);
  }
  getDirent(path: fs.PathLike) {
    return fs.readdirSync(path, { withFileTypes: true });
  }
  joinPaths(paths: string[]) {
    // const functionName = this.joinPaths.name;
    if (!Array.isArray(paths))
      throw new ZionError(JOINPATHSERROR, "joinPaths()", arguments);

    return path.join(...paths);
  }
  exists(path: string) {
    return fs.existsSync(path);
  }
}
// /Users/WAW/Documents/Projects/ZION/node_modules/@types/node/events.d.ts
export let TreeNodeExport = TreeNode;
export type ITreeNodeExport = ITreeNode;
export type ITreeExport = ITree;
export type IFileExport = IFile;
export type IFolderExport = IFolder;
export type IRootExport = IRoot;
export let system: System = new System();
Object.assign(system, fs);
