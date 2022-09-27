import { IMonorepo, Organization } from "./Types/Monorepo.js";

export const toKeep = [
  "telegraf",
  "styled-components",
  "ethers",
  "ipfs",
  "ipfs-http",
  "es-lint",
  "eslint-plugin-import",
  "eslint-plugin-react",
  "parcel",
  "typescript",
  "bundler",
  "react",
  "react-dom",
];

/**
 * Class utlizzata per gestire un monorepo.
 */
export class Monorepo implements IMonorepo {
  static monorepos: Monorepo[] = [];
  constructor(
    public id: string,
    public name: string,
    public path: string,
    public appFolder?: string,
    public packagesFolder?: string,
    public organization?: Organization
  ) {
    Monorepo.monorepos.push(this);
  }
}
