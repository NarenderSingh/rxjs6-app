import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

// const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
//   map((users) => console.log("users: ", users.response)),
//   catchError((error) => {
//     console.log("error: ", error);
//     return of(error);
//   })
// );

//#2

// const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
//   map((userResponse) => console.log("users: ", userResponse)),
//   catchError((error) => {
//     console.log("error: ", error);
//     return of(error);
//   })
// );

// obs$.subscribe();

// #3
const users$ = ajax({
  url: "https://httpbin.org/delay/2",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "rxjs-custom-header": "Rxjs",
  },
  body: {
    rxjs: "Hello World!",
  },
}).pipe(
  map((response) => console.log("response: ", response)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);

users$.subscribe();

// #4

const obs$ = ajax(`https://api.github.com/404`).pipe(
  map((userResponse) => console.log("users: ", userResponse)),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);

obs$.subscribe();
