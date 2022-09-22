import { ComplexMixin } from "../Types/Mixin";

export interface IBase {
  base: boolean;
}

export class Base implements IBase {
  base: true = true;
  constructor(...arg: any[]) {
    arg;
  }
}

/**
 * questo pattern prevese l'uso di Mixin che accettano un
 * solo parametro nel costruttore.
 */
export class Mixv3<MixedInterfaces> {
  constructor(public superclass: ZionTypes.Class.GCtor<any>) {}
  with(...mixins: ComplexMixin<any>[]): ZionTypes.Class.GCtor<MixedInterfaces> {
    let counter = -1;
    mixins.forEach((mixin, index) => {
      this.superclass = class
        extends //@ts-ignore
        mixin<typeof this.superclass>(this.superclass, index) {};
    });
    for (let mixin of mixins) {
      counter++;
      this.superclass = class extends (
        mixin<typeof this.superclass>(this.superclass, counter)
      ) {};
    }
    return this.superclass;
  }
}
