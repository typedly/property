// type Example1 = Typedly.Property.Add<{ firstName: 'a', surName: 'b' }, 'city', 'London'>;
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