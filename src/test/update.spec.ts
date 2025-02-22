import { Update } from "../lib";

const object = { firstName: 'Someone' as string, lastName: 'Someone surname', age: 227 } as const;
type Updated = Update<typeof object, 'firstName', 'The new value'>;
/*
  {
    readonly firstName: "The new value";
    readonly lastName: "Someone surname";
    readonly age: 227;
  }
*/
