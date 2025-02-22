/**
 * @description Retrieves the type of a specified property from an `Obj`.
 * @export
 * @template Obj The object type.
 * @template Name The property key.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Got = Get<typeof object, 'firstName'>;
 */
export type Get<
  Obj extends object,
  Name extends keyof Obj
> = Obj[Name];
