import { Set } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Added = Set<typeof object, 'newProperty', 'The new property value'>;
/*
{
    readonly firstName: "Someone";
    readonly lastName: "Someone surname";
    readonly age: 227;
} & {
    newProperty: "The new property value";
}
*/
type Saved = Set<typeof object, 'firstName', 'The new value'>;
/*
  {
    readonly firstName: "The new value";
    readonly lastName: "Someone surname";
    readonly age: 227;
  }
*/
