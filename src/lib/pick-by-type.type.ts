/**
 * @description Picks the properties of the given type.
 * @export
 * @template {object} Obj The object to pick properties.
 * @template Type The type of property values to pick.
 * @example
 * const object = { firstName: 'Someone', age: 227, city: 'London' } as const;
 * type PickedString = PickByType<typeof object, string>; // Result: { firstName: "Someone", city: "London" }
 */
export type PickByType<
  Obj extends object,
  Type
> = { [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key]; };
