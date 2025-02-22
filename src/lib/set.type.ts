// Type.
import { Add } from "./add.type";
/**
 * @description Sets or updates a property in the object, allowing more flexible type changes.
 * @export
 * @template {object} Obj The object to modify.
 * @template {PropertyKey} Name The property name to set.
 * @template Value The type of the property to set.
 * @example
 * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
 * type Added = Set<typeof object, 'newProperty', 'The new property value'>;
 */
export type Set<
  Obj extends object,
  Name extends PropertyKey,
  Value
> = Name extends keyof Obj 
  ? { [Key in keyof Obj]: Key extends Name ? Value : Obj[Key] } 
  : Add<Obj, Name, Value>;
