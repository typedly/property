/**
 * @description Removes the nested properties.
 * @export
 * @template {object} Obj The object to remove nested properties.
 * @template {string} Path The path to remove.
 */
export type DeepRemove<
  Obj extends object,
  Path extends string
> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof Obj
    ? Obj[Key] extends object
      ? { [K in keyof Obj]: K extends Key ? DeepRemove<Obj[Key], Rest> : Obj[K] }
      : Obj
    : Obj
  : { [K in keyof Obj as K extends Path ? never : K]: Obj[K] }; // Key Remapping instead { [K in keyof Obj]: K extends Path ? never : Obj[K] };
