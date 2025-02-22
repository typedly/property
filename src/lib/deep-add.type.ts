/**
 * @description
 * @export
 * @template {object} Obj 
 * @template {string} Path 
 * @template Value 
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
