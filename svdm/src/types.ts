/**
 * This type checks if the given wildcard type is a union type (e.g. `string | number`).
 */
export type IsUnion<T, U extends T = T> = T extends any
  ? [U] extends [T]
    ? false
    : true
  : never;
