import { Remove } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Removed = Remove<typeof object, 'firstName'>;
/*
  type Removed = {
    readonly age: 227;
    readonly lastName: "Someone surname";
  }
*/