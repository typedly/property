import { Add } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = Add<typeof object, 'city', 'London'>;
/*
  type Example1 = {
    readonly firstName: "Someone";
    readonly lastName: "Someone surname";
    readonly age: 227;
  } & {
    city: "London";
  }
*/

type Example2 = Typedly.Property.Add<typeof object, 'city', 'London', true>;
/*
  type Example2 = {
    readonly firstName: "Someone";
    readonly lastName: "Someone surname";
    readonly age: 227;
  } & {
    city?: "London" | undefined;
  }
*/
