import { DeepPick } from "../lib";

const object = { user: { name: 'Someone', address: { city: 'London', zip: '12345' } } } as const;
type Example1 = DeepPick<typeof object, 'user.name'>;
/*
  type Example1 = {
    user: {
        name: "Someone";
    };
  }
*/