import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// #1 - return full response
const observable = ajax("https://jsonplaceholder.typicode.com/users").pipe(
  map((d) => d.response)
);

// #2 - return name only
const users = ajax("https://jsonplaceholder.typicode.com/users").pipe(
  map((d) => {
    return d.response.map((user) => {
      return user.name;
    });
  })
);

observable.subscribe((d) => console.log(d));
users.subscribe((name) => console.log(name));

let userSubscriber = users.subscribe((user) => console.log(user));
userSubscriber.unsubscribe();;
