/**
 * @description Wrapper of `Omit` to remove a property from an object type.
 * @export
 * @template {object} Obj The original object type.
 * @template {keyof Obj} Name The property key name to remove.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Removed = Remove<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
 */
export type Remove<
  Obj extends object,
  Name extends keyof Obj,
> = Omit<Obj, Name>;
