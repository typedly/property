import { Property } from '../lib';

type UserProfile = {
  personalInfo: {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };
  settings: {
    theme: string;
    notifications: boolean;
  };
};

// First, use DeepAdd to add a new property at a deeper level.
type UpdatedProfile = Property.DeepAdd<UserProfile, 'personalInfo.address.zipCode', string>;
// Resulting type:
// {
//   personalInfo: {
//     name: string;
//     age: number;
//     address: {
//       street: string;
//       city: string;
//       zipCode: string; // Added zipCode property
//     };
//   };
//   settings: { theme: string; notifications: boolean; };
// }

// Then, use DeepPick to extract specific properties from the updated object.
type PickedProfile = Property.DeepPick<UpdatedProfile, 'personalInfo.address.zipCode'>;
// Resulting type:
// {
//   personalInfo: {
//     address: {
//       zipCode: string; // Only the added zipCode property
//     };
//   };
// }
