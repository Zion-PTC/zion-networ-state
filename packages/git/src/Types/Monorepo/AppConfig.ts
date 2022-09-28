export enum PackagesSubFolders {
  "@zionstate" = "@zionstate",
  "@zionrepack" = "@zionrepack",
  "@zionstate_js" = "@zionstate_js",
  "@zionstate_node" = "@zionstate_node",
}

export enum AppPackPrefix {
  zionapps = "@zionapps",
}

export type PackagesSubFoldersTypes = keyof typeof PackagesSubFolders;
