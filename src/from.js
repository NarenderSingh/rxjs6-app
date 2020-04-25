import { from } from "rxjs";
import { map, filter } from "rxjs/operators";
import { users } from "./data/users";

const observable = from(users);

//#1
observable.subscribe((user) => console.log(user));

//#2
observable
  .pipe(map((user) => user.email))
  .subscribe((user) => console.log(user));

//#3
observable
  .pipe(
    filter((user) => user.id !== 8),
    filter((user) => user.id > 6),
    map((users) => users.name)
  )
  .subscribe((user) => console.log(user));
