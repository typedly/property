import { PickWithTransform } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname' };
type TransformedPick = PickWithTransform<typeof object, 'firstName', (val: string) => number>;
// Result: { firstName: number }
