/**
 * @description Picks specified nested properties from an object.
 * @export
 * @template Obj The object type.
 * @template Names The list of properties to pick.
 * @example
 * const object = { user: { name: 'Someone', address: { city: 'London', zip: '12345' } } } as const;
 * type Picked = DeepPick<typeof object, 'user.name'>;
 */
export type DeepPick<
  Obj extends object,
  Path extends string
> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof Obj
    ? Obj[Key] extends object
      ? { [K in Key]: DeepPick<Obj[Key], Rest> }
      : never
    : never
  : Path extends keyof Obj
  ? { [K in Path]: Obj[K] }
  : never;
