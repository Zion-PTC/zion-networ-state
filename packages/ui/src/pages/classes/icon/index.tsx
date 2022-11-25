import React from "react";
import Link from "next/link";
import path from "path";
import { Icon } from "../../../HTML/React/classes";
const joinPaths = path.join;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * usage:
 * ```ts
 * const root = "/classes";
 * const iconpaths = ["account", "album", "arrowBack"];
 * const builtPaths = buildPaths(root, iconpaths);
 * function buildPaths(path: string, array: string[]) {
 *   const res = array.map((item, index, array) =>
 *     buildPath([path, item], item)
 *   );
 *   return res;
 * }
 * ```
 * @param paths
 * @param text
 * @returns
 */
function buildPathTuple(paths: string[], text: string) {
  let res: [string, string] = [joinPaths(...paths), text];

  return res;
}

function buildPaths(path: string, array: string[]) {
  const res = array.map((item, index, array) =>
    buildPathTuple([path, item], item)
  );
  return res;
}

function createLinks(
  path: [string, string],
  index: number
) {
  const LinkRes = (
    <>
      <Link href={path[0]} key={index}>
        {capitalizeFirstLetter(path[1])}
      </Link>
      <br />
    </>
  );
  return LinkRes;
}

export default function index() {
  // TODO #12 aggiungere link ad ogni icona
  // TODO mettere le icone in mezzo la pagina e a tutto
  // schermo, forse questo conviene farlo se possibile nel
  // defaul delle icone
  const root = "/classes/icon";
  const iconpaths = Icon.svgslist();
  const builtPaths = buildPaths(root, iconpaths);
  const mappedPaths = builtPaths.map(createLinks);
  return <div>{mappedPaths}</div>;
}
