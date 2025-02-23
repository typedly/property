import { DeepRemove } from "../lib/deep-remove.type";

// Example 1: Removing a nested property
type Example1 = DeepRemove<{
  user: {
    address: {
      city: string;
      zip: string;
    };
    name: string;
  };
}, 'user.address.zip'>;

// Expected Result:
// {
//   user: {
//     address: {
//       city: string;
//     };
//     name: string;
//   };
// }

// Example 2: Removing a top-level property
type Example2 = DeepRemove<{
  firstName: string;
  lastName: string;
  age: number;
}, 'lastName'>;

// Expected Result:
// {
//   firstName: string;
//   age: number;
// }

// Example 3: Removing a deeply nested property from an object with mixed types
type Example3 = Typedly.Property.Deep.Remove<{
  config: {
    database: {
      host: string;
      port: number;
      security: {
        enabled: boolean;
        algorithm: string;
      };
    };
    ui: {
      theme: string;
      language: string;
    };
  };
  metadata: {
    version: string;
  };
}, 'config.database.security.algorithm'>;

// Expected Result:
// {
//   config: {
//     database: {
//       host: string;
//       port: number;
//       security: {
//         enabled: boolean;
//       };
//     };
//     ui: {
//       theme: string;
//       language: string;
//     };
//   };
//   metadata: {
//     version: string;
//   };
// }