export interface find1<T, L, K> {
  key: string;
  constructor: T;
  parameter: string;
  parsed: L;
  instance: K;
  callback: string;
}

export function findItem<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string
): void;
export function findItem<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string,
  paramToParse: string
): void;
export function findItem<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string,
  paramToParse?: string
): void {
  // TODO ts error
  //@ts-expect-error
  if (parsed[parameter])
    // TODO ts error
    //@ts-expect-error
    parsed[parameter].map((parsedParam) => {
      // TODO ts error
      //@ts-expect-error
      let res: N | undefined = constructor[parameter].find(
        // TODO ts error
        //@ts-expect-error
        (item) => item[key] === parsedParam
      );
      // TODO ts error
      //@ts-expect-error
      if (res) instance[callback](res);
    });
  if (paramToParse !== undefined) {
    // TODO ts error
    //@ts-expect-error
    let res: N | undefined = constructor[parameter].find(
      // TODO ts error
      //@ts-expect-error

      (item) => item[key] === parsed[paramToParse]
    );
    // TODO ts error
    //@ts-expect-error
    if (res) instance[callback](res);
  }
}

// function foo() {
//   let res: IDesignPattern | undefined = DesignPattern.designPatterns.find(
//     (desPatt) => desPatt.nome === parsed.designPattern
//   );
//   if (res) nwTutorial.aggiungiOggetto(res);
// }
