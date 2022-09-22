// import mongoose from "mongoose";
// TODO create a mixin which makes a class mongoosable

export interface ZionError {
  name: string;
  message: string;
  stack?: string;
}

export interface ZionErrorConstructor {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}

/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param args Object containing the called parameters
 */
export class ZionError extends Error {
  constructor(
    message?: string,
    name?: string,
    public args?: string[] | IArguments
  ) {
    super(message);
    if (name) this.name = name;
  }
  log() {
    console.log(this);
  }
}

// let zionErrorSchema = new mongoose.Schema({
//   message: String,
//   name: String,
//   cause: Object,
//   args: Object,
// });

// zionErrorSchema.loadClass(ZionError);
// export let ZionErrorDoc = mongoose.model("Error", zionErrorSchema);

export default ZionError;
