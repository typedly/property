import { PickWithReadonly } from "../lib/pick-with-readonly.type";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type ReadonlyPick = PickWithReadonly<typeof object, 'firstName'>;
// Result: { readonly firstName: "Someone" }
