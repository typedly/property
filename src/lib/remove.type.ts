/**
 * @description Removes a property from an object type and ensures the final type is partially resolved.
 * @export
 * @template {object} Obj The original object type.
 * @template {keyof Obj} Name The property key name to remove.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Removed = Remove<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
 */
export type Remove<
  Obj extends object,
  Name extends keyof Obj
> = Omit<Obj, Name> extends infer Captured
  ? Captured extends object
    ? Captured
    : never
  : never;
