/**
 * @description Picks the properties of `Names` as readonly.
 * @export
 * @template {object} Obj The object to pick properties.
 * @template {keyof Obj} Names The name of properties to pick.
 */
export type PickWithReadonly<
  Obj extends object,
  Names extends keyof Obj
> = { readonly [Key in Names]: Obj[Key] };
