/////// working Mix().with()

import { MixinTypeNoArgs } from "../Types/Mixin/Mixins";

/**
 * this version kinda works but there is still a TS error.
 */
export {};
type MixinType = MixinTypeNoArgs;

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
  SuperclassGeneric extends new () => {},
  MixinGeneric extends MixinType
> {
  constructor(public superclass: SuperclassGeneric) {
    this.superclass = superclass;
  }
  with(...mixins: MixinGeneric[]) {
    // FIXME capire come fixare sto problema
    //@ts-expect-error
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
