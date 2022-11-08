import { ChangeEvent } from "react";

/**
 * This helper creates a handleChange callback which is
 * meant to be passed down to event handlers
 * @param callBacks List of callback that should be called
 * by the handleChange handler.
 * @returns an handler function
 */
export const handleChange_v1 =
  (
    callBacks: ((
      e: ChangeEvent<HTMLInputElement>
    ) => void)[],
    preventDefault: boolean = true
  ) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    if (preventDefault) e.preventDefault();
    callBacks.forEach(callback => callback(e));
  };
