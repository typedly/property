/**
 * @description Picks the properties of the name with renamed keys.
 * @export
 * @template {object} Obj The object to pick properties.
 * @template {keyof Obj} Names The property names to pick.
 * @template {Record<string, string>} Rename Properties to rename the names in the returned object.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname' };
 * type RenamedPick = PickWithRenaming<typeof object, 'firstName', { firstName: 'firstNameRenamed' }>;
 * // Result: { firstNameRenamed: "Someone", lastName: "Someone surname" }
 */
export type PickWithRenaming<
  Obj extends object,
  Names extends keyof Obj,
  Rename extends Record<string, string>
> = {
  [K in keyof Obj as K extends Names ? Rename[K & keyof Rename] : K]: Obj[K] // K extends Names ? Rename[K & keyof Rename] : Obj[K];
};
