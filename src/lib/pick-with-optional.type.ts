/**
 * @description Picks the specified properties as partial/optional.
 * @export
 * @template {object} Obj The object to pick properties of `Names`.
 * @template {keyof Obj} Names The name of properties to pick.
 */
export type PickWithOptional<
  Obj extends object,
  Names extends keyof Obj,
> = Partial<{ [Key in Names]: Obj[Key] }>
