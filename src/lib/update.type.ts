// Type.
import { Set } from "./set.type";
/**
 * @description Updates the type of an existing property in the object.
 * @export
 * @template {object} Obj The object to modify.
 * @template {keyof Obj} Name The property name to update.
 * @template {Obj[Name]} Value The new value of the same type(constrained) to update.
 * @example
 * const object = { firstName: 'Someone' as string, lastName: 'Someone surname', age: 227 } as const;
 * type Updated = Update<typeof object, 'firstName', 'The new value'>;
 */
export type Update<
  Obj extends object,
  Name extends keyof Obj,
  Value extends Obj[Name]
> = Set<Obj, Name, Value>;
