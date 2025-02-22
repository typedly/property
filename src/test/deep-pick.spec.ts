import { DeepPick } from "../lib";

const object = { user: { name: 'Someone', address: { city: 'London', zip: '12345' } } } as const;
type Example1 = DeepPick<typeof object, 'user.name'>;
// type Example1 = {
//   user: {
//       name: "Someone";
//   };
// }

type UserWithDetails = {
  userInfo: {
    name: string;
    address: {
      street: string;
      city: string;
      country: {
        name: string;
        code: string;
      };
    };
    age: number;
  };
  preferences: {
    theme: string;
    notifications: boolean;
  };
};

type PickedUserName = DeepPick<UserWithDetails, 'userInfo.name'>;
// Resulting type: { userInfo: { name: string; }; }

type PickedUserCountry = DeepPick<UserWithDetails, 'userInfo.address.country.name'>;
// Resulting type: { userInfo: { address: { country: { name: string; }; }; }; }

type PickedPreferences = DeepPick<UserWithDetails, 'preferences.theme'>;
// Resulting type: { preferences: { theme: string; }; }
