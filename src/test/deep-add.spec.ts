import { DeepAdd } from "../lib";

type Example1 = DeepAdd<{ user: { name: string } }, 'user.age', number>;
// type Example1 = { user: { name: string; } & { age: number; }; }

type Example2 = DeepAdd<{ user: { address: { city: string } } }, 'user.address.zipcode', string>;
// type Example2 = { user: { address: { city: string; } & { zipcode: string; }; }; }

type Profile = { user: { name: string } };

// Adding a new nested property
type Example3 = Typedly.Property.Deep.Add<Profile, 'user.age', number>;
/*
  type Example3 = {
    user: {
      name: string;
    } & {
      age: number;
    };
  }

  {
    user: {
      name: string;
      age: number;
    }
  }
*/

// Adding a deeply nested property
type Example4 = DeepAdd<Profile, 'user.address.city', string>;
/*
  type Example4 = {
    user: {
      name: string;
    } & {
      address: {
        city: string;
      };
    };
  }

  {
    user: {
      name: string;
      address: {
        city: string;
      };
    }
  }
*/

// Adding a property to a non-object value (fixing the error)
type BrokenExample = { user: string };
type Example5 = DeepAdd<BrokenExample, 'user.age', number>;
/*
  type Example5 = {
    user: {
      age: number;
    };
  }

  {
    user: {
      age: number;
    };
  }
*/

// Adding a property to a non-existing key
type Example6 = DeepAdd<Profile, 'settings.theme', string>;
/*
  type Example6 = Example & {
    settings: {
      theme: string;
    };
  }

  {
    user: {
      name: string;
    };
    settings: {
      theme: string;
    };
  }
*/



/**
 * @description 
 * @typedef {User}
 */
type User = {
  userInfo: {
    name: string;
    address: {
      street: string;
      city: string;
    };
    age: number;
  };
  active: boolean;
};

type UpdatedUser = DeepAdd<User, 'userInfo.address.zipCode', string>;
// Resulting type:
// type UpdatedUser = {
//   userInfo: {
//       name: string;
//       address: {
//           street: string;
//           city: string;
//       } & {
//           zipCode: string;
//       };
//       age: number;
//   };
//   active: boolean;
// }

type AnotherUpdatedUser = DeepAdd<User, 'userInfo.phoneNumber', string | undefined>;
// Resulting type:
// type AnotherUpdatedUser = {
//   userInfo: {
//       name: string;
//       address: {
//           street: string;
//           city: string;
//       };
//       age: number;
//   } & {
//       phoneNumber: string | undefined;
//   };
//   active: boolean;
// }
