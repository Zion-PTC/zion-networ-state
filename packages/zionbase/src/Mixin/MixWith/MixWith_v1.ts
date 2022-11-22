type MixWith = <T extends new (...args: any[]) => {}>(
  superclass: T
) => new () => {};

type MixWithType = MixWith;

export interface IMixWith_v1 {
  name: string;
}

export interface MixWith_v1 {
  name: string;
}
/**
 * This is the first version of the mix with implemantation.
 * It works but it needs a dirty trick to have the
 * Typechecking return the correct value, but it actually
 * creates those from some reconstructed interface which is
 * drastically substituted to the original type:
 * ```js
 * // creates an interface mergin the 3 classes
 * interface IMixer extends IName, ISurname, Base {}
 *
 * const Mixer = new Mix<typeof Base, typeof Name | typeof Surname>(Base).with(
 *   Name,
 *   Surname
 * ) as unknown as GConstructor<IMixer>;
 *
 * const obj = new Mixer();
 * ```
 */
export class Mix<
  SuperclassGeneric extends new () => {} = new () => {},
  MixinGeneric extends MixWithType = MixWithType
> {
  constructor(public superclass: SuperclassGeneric) {
    this.superclass = superclass;
  }
  with(...mixins: MixinGeneric[]) {
    return mixins.reduce(
      (c, mixin) => mixin(c) as SuperclassGeneric,
      this.superclass
    );
  }
}

export class MixWith_v1 implements IMixWith_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type MixWith_v1Ctor = {
  new (name: string): MixWith_v1;
};

export const MixWith_v1Ctor: MixWith_v1Ctor = MixWith_v1;
