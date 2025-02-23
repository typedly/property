import { PickWithOptional } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Picked1 = PickWithOptional<typeof object, 'firstName'>; // firstName?: "Someone"
type Picked2 = Typedly.Property.Pick.With.Optional<typeof object, 'firstName'>; // firstName?: "Someone"
