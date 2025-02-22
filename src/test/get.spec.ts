import { Get } from "../lib";

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = Get<typeof object, 'firstName'>;
/*
type Example1 = "Someone"
*/