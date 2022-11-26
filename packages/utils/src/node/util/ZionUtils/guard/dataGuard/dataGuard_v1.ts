export interface IdataGuard_v1 {
  <T>(data: T, err: string): NonNullable<T>;
}

export const dataGuard_v1: IdataGuard_v1 = function <T>(data: T, err: string) {
  if (!data) throw new Error(err);
  data;
  return data;
};
