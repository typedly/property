/**
 * @description Picks the properties with the transformed type.
 * @export
 * @template {object} Obj The object to pick properties.
 * @template {keyof Obj} Names The property names to pick from object.
 * @template {(val: Obj[Names]) => any} Transform The function to transform the specified key into a new type.
 */
export type PickWithTransform<
  Obj extends object,
  Names extends keyof Obj,
  Transform extends (val: Obj[Names]) => any
> = { [Key in Names]: Transform extends (val: Obj[Key]) => infer Result ? Result : never };
