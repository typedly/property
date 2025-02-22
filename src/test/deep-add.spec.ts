import { DeepAdd } from "../lib";

type Profile = { user: { name: string } };

// Adding a new nested property
type Example1 = DeepAdd<Profile, 'user.age', number>;
/*
  type Example1 = {
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
type Example2 = DeepAdd<Profile, 'user.address.city', string>;
/*
  type Example2 = {
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
type Example3 = DeepAdd<BrokenExample, 'user.age', number>;
/*
  type Example3 = {
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
type Example4 = DeepAdd<Profile, 'settings.theme', string>;
/*
  type Example4 = Example & {
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
