import { PickByType } from "../lib";

const object = { firstName: 'Someone', age: 227, city: 'London' } as const;
type PickedString = PickByType<typeof object, string>;
// Result: { firstName: "Someone", city: "London" }

type Example = {
  name: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
};

// Pick only properties of type `number`
type PickedNumbers = PickByType<Example, number>;
/*
  {
    age: number;
  }
*/

// Pick only properties of type `boolean`
type PickedBooleans = PickByType<Example, boolean>;
/*
{
  isActive: boolean;
}
*/

// Pick only properties of type `string | number`
type PickedStringOrNumber = PickByType<Example, string | number>;
/*
{
  name: string;
  age: number;
}
*/

// Pick only properties of type `Date`
type PickedDates = PickByType<Example, Date>;
/*
{
  createdAt: Date;
}
*/
