/*
 * Public API Surface of property
 */
export type {
  Add,
  DeepAdd, // Typedly.Property.Deep.Add
  DeepPick, // Typedly.Property.Deep.Pick
  DeepRemove, // Typedly.Property.Deep.Remove

  Get,
  PickByType,  // Typedly.Property.Pick.By.Type
  PickWithOptional, // Typedly.Property.Pick.With.Optional
  PickWithReadonly, // Typedly.Property.Pick.With.Readonly
  PickWithRenaming, // Typedly.Property.Pick.With.Renaming
  PickWithTransform, // Typedly.Property.Pick.With.Transform

  Remove,
  Set,
  Update
} from './lib';

// Namespace.
export * from './lib/typedly.namespace';
