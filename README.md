<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/property"
    style="float:left; margin-right: 10px;"
  />
</a>

## typedly/property

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package to handle object property-related operations.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - Namespace
    - [`Typedly`](#typedly)
  - Type
    - [`Add`](#add)
    - [`DeepAdd`](#deepadd)
    - [`DeepPick`](#deeppick)
    - [`DeepRemove`](#deepremove)
    - [`Get`](#get)
    - [`PickByType`](#pickbytype)
    - [`PickWithOptional`](#pickwithoptional)
    - [`PickWithReadonly`](#pickwithreadonly)
    - [`PickWithRenaming`](#pickwithrenaming)
    - [`PickWithTransform`](#pickwithtransform)
    - [`Remove`](#remove)
    - [`Set`](#set)
    - [`Update`](#update)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/property --save-peer
```

## Api

```typescript
import {
  Add,
  DeepAdd, // Typedly.Property.Deep.Add
  DeepPick, // Typedly.Property.Deep.Pick
  DeepRemove, // Typedly.Property.Deep.Remove

  Get,
  PickByType,  // Typedly.Property.Pick.By.Type
  PickWithOptional, // Typedly.Property.Pick.With.Optional
  PickWithReadonly, // Typedly.Property.Pick.With.Readonly
  PickWithRenaming, // Typedly.Property.Pick.With.Renaming
  PickWithTransform, // Typedly.Property.Pick.With.Transform

  Remove,
  Set,
  Update
} from '@typedly/property';

// Namespace.
export * from './lib/property.namespace';
```

### `Typedly`

```typescript
type Example1 = Typedly.Property.Add<{ firstName: 'a', surName: 'b' }, 'city', 'London', false>;
// type Example1 = {
//   firstName: "a";
//   surName: "b";
// } & {
//   city: "London";
// }

type Example2 = Typedly.Property.Remove<{firstName: 'a', surName: 'b'}, 'firstName'>;
// type Example2 = { surName: "b"; }

type Example3 = Typedly.Property.Get<{firstName: 'a', surName: 'b'}, 'firstName'>;
// type Example3 = "a"

type Example4 = Typedly.Property.Set<{firstName: 'a', surName: 'b'}, 'age', 22>;
// type Example4 = {
//   firstName: "a";
//   surName: "b";
// } & {
//   age: 22;
// }

type Example5 = Typedly.Property.Update<{name: string | 'a'}, 'name', 'b'>;
// type Example5 = { name: "b"; }

type Example6 = Typedly.Property.PickByType<{name: 'a', age: 1}, string>;
// type Example6 = { name: "a"; }

type Example7 = Typedly.Property.Deep.Add<{user: {address: {city: 'a'}}}, 'user.address.zip', '123'>;
// type Example7 = {
//   user: {
//       address: {
//           city: "a";
//       } & {
//           zip: "123";
//       };
//   };
// }

type Example8 = Typedly.Property.Deep.Pick<{user: {address: {city: 'a', zip: '123'}}}, 'user.address.city'>;
// type Example8 = { user: { address: { city: "a"; }; }; }
```

### `Add`

```typescript
import { Add } from '@typedly/property';

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
```

### `DeepAdd`

```typescript
import { DeepAdd } from '@typedly/property';

type Profile = { user: { name: string } };

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

type Example2 = Typedly.Property.Deep.Add<Profile, 'user.address.city', string>; // The use of Typedly namespace.
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
```

### `DeepPick`

```typescript
import { DeepPick } from '@typedly/property';

const object = { user: { name: 'Someone', address: { city: 'London', zip: '12345' } } } as const;
type Example1 = DeepPick<typeof object, 'user.name'>;
/*
  type Example1 = {
    user: {
        name: "Someone";
    };
  }
*/
```

### `DeepRemove`

```typescript
import { DeepRemove } from '@typedly/property';

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
```

### `Get`

```typescript
import { Get } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Example1 = Get<typeof object, 'firstName'>;
/*
  type Example1 = "Someone"
*/
```

### `PickByType`

```typescript
import { PickByType } from '@typedly/property';

const object = { firstName: 'Someone', age: 227, city: 'London' } as const;
type PickedString = PickByType<typeof object, string>;
// Result: { firstName: "Someone", city: "London" }
```

### `PickWithOptional`

```typescript
import { PickWithOptional } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Picked1 = PickWithOptional<typeof object, 'firstName'>; // firstName?: "Someone"
type Picked2 = Typedly.Property.Pick.With.Optional<typeof object, 'firstName'>; // firstName?: "Someone"
```

### `PickWithReadonly`

```typescript
import { PickWithReadonly } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type ReadonlyPick = PickWithReadonly<typeof object, 'firstName'>;
// Result: { readonly firstName: "Someone" }
```

### `PickWithRenaming`

```typescript
import { PickWithRenaming } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname' };
type RenamedPick = PickWithRenaming<typeof object, 'firstName', { firstName: 'firstNameRenamed' }>;
// Result: { firstNameRenamed: "Someone", lastName: "Someone surname" }
```

### `PickWithTransform`

```typescript
import { PickWithTransform } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname' };
type TransformedPick = PickWithTransform<typeof object, 'firstName', (val: string) => number>;
// Result: { firstName: number }
```

### `Remove`

```typescript
import { Remove } from '@typedly/property';

const object = { firstName: 'Someone', lastName: 'Someone surname', age: 227 } as const;
type Removed = Remove<typeof object, 'firstName'>;
/*
  type Removed = {
    readonly age: 227;
    readonly lastName: "Someone surname";
  }
*/
```

### `Set`

```typescript
import { Set } from '@typedly/property';

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
```

### `Update`

```typescript
import { Update } from '@typedly/property';

const object = { firstName: 'Someone' as string, lastName: 'Someone surname', age: 227 } as const;
type Updated = Update<typeof object, 'firstName', 'The new value'>;
/*
  {
    readonly firstName: "The new value";
    readonly lastName: "Someone surname";
    readonly age: 227;
  }
*/
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/property
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/property
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/property
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/property
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/property/issues
  [typedly-forks]: https://github.com/typedly/property/network
  [typedly-license]: https://github.com/typedly/property/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/property/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fproperty.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fproperty

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
