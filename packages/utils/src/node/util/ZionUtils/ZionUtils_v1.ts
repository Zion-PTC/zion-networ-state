import util from "util";
import { Condizioni } from "../Condizioni";
import { emptyString } from "../Condizioni/Condizioni_v1";
import { zionUtil } from "../";

interface IInspectArguments {
  object: any;
  showHidden?: boolean;
  depth?: number;
  color?: boolean;
}
export type DebugLogger = util.DebugLogger;

export interface IZionUtils_v1 {
  ////// util
  inspect(obj: IInspectArguments): string;
  debuglog(
    section: string,
    callback?: ((fn: util.DebugLoggerFunction) => void) | undefined
  ): util.DebugLogger;
  promisify: <TCustom extends Function>(
    fn: util.CustomPromisify<TCustom>
  ) => TCustom;
  ////// zion
  // ARRAY
  checkArraysContent: <T>(array: T[], nextArray: T[]) => boolean;
  checkArrayElementsConstructor<T>(array: T[], constructor: Function): boolean;
  checkObjectConstructor(object: object, constructor: Function): boolean;
  hasArrayObjectElements(array: object[]): boolean | string;
  isArrayEmpty(array?: any[]): boolean;
  changePosition<T>(array: T[], old: number, new_pos: number): T[] | string;
  extractSameElementsFromArray<T extends string | boolean | number>(
    array1: T[],
    array2: T[]
  ): T[];
  popFirst<T>(array: T[]): T[];
  removeSpaceFromString(type: number, string: string): string;
  sliceArray<T>(size: number, array: T): T[][] | string;
  subtractArrays(arr1: string[], arr2: string[]): string[];
  // STRINGS
  splitAt(string: string, symbol: string): string[];
  upperCaseFirst(string: string): string;
  // SORTING
  sortDescending<T>(a: T[], b: T[], index: number): number | undefined;
  // CALLBACK
  chiamaNVolteCallback<T>(volte: number, callback: Function): T[];
  // MATH
  quantiDecimaliDopoLaVirgola(number: number): number;
  massimoComuneDivisore(a: number, b: number): number;
  modulo(a: number, b: number): number;
  convertDecimalToFracionString(decimale: number): string; //////////FATTO
}

export class ZionUtils_v1 implements IZionUtils_v1 {
  condizioni: Condizioni;
  constructor() {
    this.condizioni = new Condizioni();
  }
  ////// Zionutils_v1
  inspect = util.inspect;
  debuglog = util.debuglog;
  promisify = util.promisify;
  ////// zion
  checkArraysContent = checkArraysContent;
  checkArrayElementsConstructor = checkArrayElementsConstructor;
  checkObjectConstructor = checkObjectConstructor;
  hasArrayObjectElements = hasArrayObjectElements;
  isArrayEmpty = isArrayEmpty;
  changePosition = changePosition;
  extractSameElementsFromArray = extractSameElementsFromArray;
  popFirst = popFirst;
  removeSpaceFromString = removeSpaceFromString;
  sliceArray = sliceArray;
  subtractArrays = subtractArrays;
  // strings
  splitAt = splitAt;
  upperCaseFirst = upperCaseFirst;
  // sorting
  sortDescending = sortDescending;
  // callback
  chiamaNVolteCallback = chiamaNVolteCallback;
  // Maths
  quantiDecimaliDopoLaVirgola = quantiDecimaliDopoLaVirgola;
  massimoComuneDivisore = massimoComuneDivisore;
  modulo = modulo;
  convertDecimalToFracionString = convertDecimalToFracionString;
}

/**
 * Il contenuto degli array deve essere identico anche nell'ordine
 * @param {*} array
 * @param {*} nextArray
 * @returns
 */
function checkArraysContent<T>(array: T[], nextArray: T[]): boolean {
  if (array.length !== nextArray.length) {
    return false;
  }
  let results: boolean[] = [];
  for (let index = 0; index < array.length; index++) {
    // TODO errore TS
    // @ts-expect-error
    const element: T = array[index];
    // @ts-expect-error
    const elementOfNextArray: T = nextArray[index];
    if (element === elementOfNextArray) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  if (!results.includes(false)) {
    return true;
  } else {
    return false;
  }
}
/**
 * Questa funzione controlla che tutti gli elementi di un
 * array siano della classe inviata come secondo
 * argomento.
 * @param {array} array array del quale bisogna
 * controllare gli elementi
 * @param {class} constructor la classe contro la quale
 * bisogna effettuare il check
 * @return True se tutti gli elementi matchano con il
 * costruttore fornito. False se un solo elemento non
 * matcha la classe fornita.
 */
function checkArrayElementsConstructor<T>(
  array: T[],
  constructor: Function
): boolean {
  let risultatoControllo: boolean[] = [];
  const controllaIlConstructor = function (elemento: T) {
    //@ts-ignore
    let condizione = elemento.constructor === constructor;
    risultatoControllo.push(condizione);
    return risultatoControllo.some(el => el === false);
  };
  const controlloFinale = function (element: boolean) {
    return element === false;
  };
  array.forEach(controllaIlConstructor);
  return !risultatoControllo.some(controlloFinale);
}
/**
 *
 * @param object
 * @param constructor
 * @returns
 */
function checkObjectConstructor(
  object: object,
  constructor: Function
): boolean {
  const oggettoUgualeConstructor = object.constructor === constructor;
  return oggettoUgualeConstructor;
}
// TODO descrizione metodo
/**
 *
 * @param array
 * @returns
 */
function hasArrayObjectElements(
  this: IZionUtils_v1,
  array: object[]
): boolean | string {
  if (this.isArrayEmpty(array)) {
    return "Array is Empty";
  }
  let result: boolean[] = [];
  array.forEach(element => {
    if (typeof element === "object") result.push(true);
    if (typeof element !== "object") result.push(false);
  });
  if (!result.includes(true)) return false;
  else return true;
}
/**
 *
 * @param array
 * @returns
 */
function isArrayEmpty(array: any[]): boolean {
  if (array.length !== 0) return false;
  else return true;
}
/**
 *
 * @param {*[]} array Array da ricomporre
 * @param {number} old Indice di orgine dell'elemento da
 * spostare.
 * @param {number} new_pos Indice della posizione target
 * dell'elemento.
 * @returns Un array ricomposto nel quale l'elemento
 * situato precedentement all'indice di origine è situato,
 * nel risultato di ritorno, all'indice target.
 */
function changePosition<T>(
  array: T[],
  old: number,
  new_pos: number
): T[] | string {
  // i numeri devono essere inclusi nella lunghezza
  // massima
  if (
    new_pos > array.length - 1 ||
    old > array.length ||
    new_pos < 0 ||
    old < 0
  ) {
    return "not";
  }
  // TODO errore TS
  // @ts-expect-error
  array.splice(new_pos, 0, array.splice(old, 1)[0]);
  return array;
}
/**
 *
 * @param array1
 * @param array2
 * @returns
 */
function extractSameElementsFromArray<T extends string | boolean | number>(
  array1: T[],
  array2: T[]
): T[] {
  let sameValues: T[] = [];
  if (
    // controllo se gli array sono vuoti
    !zionUtil.isArrayEmpty(array1) &&
    !zionUtil.isArrayEmpty(array2)
  ) {
    // controllo se uno dei due array contiene oggetti
    if (
      //@ts-expect-error
      zionUtil.hasArrayObjectElements(array1) ||
      //@ts-expect-error
      zionUtil.hasArrayObjectElements(array2)
    ) {
      throw new Error(
        `Uno dei due array contiente oggetti, questa funziona richiede che l'array contenga valori (string, number, boolan)`
      );
    }
    for (let element2 of array2) {
      let match = array1.find(element1 => element1 === element2);
      match ? sameValues.push(match) : "no match found";
    }
    return sameValues;
  }
  throw new Error("Uno dei due array è vuoto");
}
/**
 *
 * @param {*[]} array Array sorgente di lunghezza n.
 * @returns Ritorna un array ricomposto, dove il primo
 * elemeno del array è stato eliminato. L'array risultato
 * ha un lunghezza n-1.
 */
function popFirst<T>(array: T[]): T[] {
  array.shift();
  return array;
}
// TODO descrizione metodo
/**
 * @param type
 * @param string
 * @returns
 */
function removeSpaceFromString(type: number, string: string): string {
  // TODO Migliorare inizializzazione
  let newString: string = "";
  switch (type) {
    case 1:
      method1(string);
      break;
    case 2:
      method2(string);
      break;
    case 3:
      method3(string);
      break;
    default:
      break;
  }
  function method1(string: string) {
    newString = string.replace(/ /g, "");
  }
  function method2(string: string) {
    newString = string.replace(/\s+/g, "");
  }
  function method3(string: string) {
    newString = string.split(" ").join("");
  }
  return newString;
}
/**
 *
 * @param size : ;
 * @param array
 * @returns
 */
function sliceArray<T>(size: number, array: T): T[][] | string {
  if (typeof size === "number" && Array.isArray(array)) {
    var s: number = size;
    var arrayOfArrays: T[][] = [];
    for (var i = 0; i < array.length; i += s) {
      arrayOfArrays.push(array.slice(i, i + s));
    }
    return arrayOfArrays;
  } else {
    let res: string;
    typeof size !== "number"
      ? (res = "size is not a number")
      : (res = "The second argument shall be an array");
    return res;
  }
}
function subtractArrays(arr1: string[], arr2: string[]) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
/**
 *
 * @param a
 * @param b
 * @param index
 * @returns
 */
function sortDescending<T extends []>(
  a: T,
  b: T,
  index: number
): number | undefined {
  if (typeof a[index] !== "number" && typeof b[index] !== "number") return;

  // TODO errore TS
  // @ts-expect-error
  return b[index] - a[index];
}
/**
 *
 * @param volte
 * @param callback
 * @returns
 */
function chiamaNVolteCallback<T>(volte: number, callback: Function): T[] {
  let array: T[] = [];
  while (volte) {
    array.push(callback());
    volte--;
  }
  return array;
}
/**
 * @param number
 * @returns
 */
function quantiDecimaliDopoLaVirgola(number: number): number {
  const len = number.toString().length - 2;
  return len;
}
/**
 *
 * @param a
 * @param b
 * @returns
 */
function massimoComuneDivisore(a: number, b: number): number {
  if (b < 0.0000001) return a;

  function mcdmcm(A: number, B: number) {
    var a, b, r, MCD, mcm;

    a = parseInt(A.toString());
    b = parseInt(B.toString());

    r = a % b;
    while (r != 0) {
      a = b;
      b = r;
      r = a % b;
    }

    MCD = b;
    mcm = (parseInt(A.toString()) * parseInt(B.toString())) / MCD;
    return { MCD: MCD, mcm: mcm };
  }
  return mcdmcm(a, b).MCD;
}
/**
 *
 * @param a
 * @param b
 * @returns
 */
function modulo(a: number, b: number): number {
  return a % b;
}
/**
 * Crea una string con il formato di frazione a partire da
 * un numero con la virgola.
 * @param decimale numero con virgola per il quale deve
 * essere creata la string.
 * @returns una string con formato frazione (0,2 => '1/5')
 */
function convertDecimalToFracionString(
  this: IZionUtils_v1,
  decimale: number
): string {
  let frazioneInString: string;
  if (decimale === 1) return "1";
  if (decimale >= 1) return "il valore passato deve essere un numero decimale!";
  const numeriDopoLaVirgola = this.quantiDecimaliDopoLaVirgola(decimale);
  let denominatore: number = Math.pow(10, numeriDopoLaVirgola);
  let numeratore: number = decimale * denominatore;
  const divisore: number = this.massimoComuneDivisore(numeratore, denominatore);
  numeratore /= divisore;
  denominatore /= divisore;
  frazioneInString =
    `${Math.floor(numeratore)}` + `/${Math.floor(denominatore)}`;
  return frazioneInString;
}

// function emptyString(el: string) {
//   return el !== "";
// }

export function splitAt(string: string, symbol: string) {
  return string.split(symbol).filter(emptyString);
}

export function upperCaseFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class BOOOOBOOO {}
export let CHOOOOOOO = "oooo";
