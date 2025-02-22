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
export type Add<
  Obj extends object,
  Name extends PropertyKey, // or `Exclude<PropertyKey, keyof Obj>` constraint
  Value,
  Optional extends boolean = false
> = Name extends keyof Obj 
    ? Obj
    : Obj & (
      Optional extends true
        ? { [K in Name]?: Value }
        : { [K in Name]: Value }
      );
