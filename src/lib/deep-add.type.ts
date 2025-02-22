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
export type DeepAdd<
  Obj extends object,
  Path extends string,
  Value
> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof Obj
    ? Obj[Key] extends object
      ? { [K in keyof Obj]: K extends Key ? DeepAdd<Extract<Obj[K], object>, Rest, Value> : Obj[K] }
      : { [K in keyof Obj]: K extends Key ? DeepAdd<{}, Rest, Value> : Obj[K] }
    : Obj & { [K in Key]: DeepAdd<{}, Rest, Value> }
  : Obj & { [K in Path]: Value };
