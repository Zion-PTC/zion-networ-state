import { MixinType } from "../Types/Mixin";

export class Mixv2 {
  constructor(public superclass: ZionTypes.Class.Constructor) {}
  with<T>(...mixins: MixinType[]): T {
    let counter = -1;
    for (let mixin of mixins) {
      counter++;
      this.superclass = class New extends mixin(this.superclass, counter) {};
    }
    return this.superclass as unknown as T;
  }
}
