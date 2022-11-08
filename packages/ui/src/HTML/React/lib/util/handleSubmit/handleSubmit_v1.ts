import {
  Dispatch,
  FormEvent,
  SetStateAction,
} from "react";

/**
 * This helper creates a handleSubmit callback which is
 * meant to be passed down to event handlers
 * @param callBacks List of callback that should be called
 * by the handleSubmit handler.
 * @returns an handler function
 */
export const handleSubmit_v1 =
  <T>(
    callBacks: ((e: T) => void)[],
    value: T,
    reset?: Dispatch<SetStateAction<string>>,
    defaultValue: string = "",
    preventDefault: boolean = true
  ) =>
  (e: FormEvent<HTMLFormElement>) => {
    if (preventDefault) e.preventDefault();
    callBacks.forEach(callBack => callBack(value));
    if (reset) reset(defaultValue);
  };
