import { PickWithRenaming } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname' };
type RenamedPick = PickWithRenaming<typeof object, 'firstName', { firstName: 'firstNameRenamed' }>;
// Result: { firstNameRenamed: "Someone", lastName: "Someone surname" }
