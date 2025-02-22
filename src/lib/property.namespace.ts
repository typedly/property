import {
  Add as _Add,
  DeepAdd as _DeepAdd,
  DeepPick as _DeepPick,
  Get as _Get,
  PickByType as _PickByType,
  Remove as _Remove,
  Set as _Set,
  Update as _Update
} from ".";

/**
 * Property namespace.
 */
export namespace Property {
  /**
   * @description Adds the property to the object.
   * @export
   * @template {object} Obj 
   * @template {Exclude<PropertyKey, keyof Obj>} Name 
   * @template Value 
   * @template {boolean} [Optional=false] 
   * @example
   * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
   * type Example1 = Add<typeof object, 'city', 'London'>;
   */
  export type Add<Obj extends object, Name extends PropertyKey, Value, Optional extends boolean = false> = _Add<Obj, Name, Value, Optional>;

  /**
   * @description Adds the property to the nested(deep) path, where the path is a string of dot-separated keys.
   * If the path points to an existing object, it will continue the recursion to add the value at the next level. 
   * If the path points to a non-existent key, the type will create a new property at that location. 
   * This allows for deeply nested object manipulation at compile-time, providing a way to safely define nested properties.
   * @export
   * @template {object} Obj The type of the object to which the property should be added.
   * @template {string} Path The path within the object, specified as a dot-separated string.
   * @template Value The type of the value to be added at the specified path.
   * @example
   * type Example1 = DeepAdd<{ user: { name: string } }, 'user.age', number>;
   * // type Example1 = { user: { name: string; } & { age: number; }; }
   * type Example2 = DeepAdd<{ user: { address: { city: string } } }, 'user.address.zipcode', string>;
   * // type Example2 = { user: { address: { city: string; } & { zipcode: string; }; }; }
   */
  export type DeepAdd<Obj extends object, Path extends string, Value> = _DeepAdd<Obj, Path, Value>;

  /**
   * @description Picks specified nested properties from an object.
   * @export
   * @template Obj The object type.
   * @template Names The list of properties to pick.
   * @example
   * const object = { user: { name: 'Someone', address: { city: 'London', zip: '12345' } } } as const;
   * type Picked = DeepPick<typeof object, 'user.name'>;
   */
  export type DeepPick<Obj extends object, Path extends string> = _DeepPick<Obj, Path>;

  /**
   * @description Retrieves the type of a specified property from an `Obj`.
   * @export
   * @template Obj The object type.
   * @template Name The property key.
   * @example
   * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
   * type Got = Get<typeof object, 'firstName'>;
   */
  export type Get<Obj extends object, Name extends keyof Obj> = _Get<Obj, Name>;

  /**
   * @description Picks the properties of the given type.
   * @export
   * @template {object} Obj The object to pick properties.
   * @template Type The type of property values to pick.
   * @example
   * const object = { firstName: 'Someone', age: 227, city: 'London' } as const;
   * type PickedString = PickByType<typeof object, string>; // Result: { firstName: "Someone", city: "London" }
   */
  export type PickByType<Obj extends object, Type>  = _PickByType<Obj, Type>;

  /**
   * @description Removes a property from an object type and ensures the final type is partially resolved.
   * @export
   * @template {object} Obj The original object type.
   * @template {keyof Obj} Name The property key name to remove.
   * @example
   * const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
   * type Removed = Remove<typeof object, 'firstName'>; // { readonly lastName: "Someone surname"; readonly age: 227; }
   */
  export type Remove<Obj extends object, Name extends keyof Obj> = _Remove<Obj, Name>;

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
  export type Set<Obj extends object, Name extends PropertyKey, Value> = _Set<Obj, Name, Value>;

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
  export type Update<Obj extends object, Name extends keyof Obj, Value extends Obj[Name]> = _Update<Obj, Name, Value>;
}
