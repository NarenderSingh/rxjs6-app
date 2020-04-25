import { of } from "rxjs";
import { filter, tap, max, min, reduce, count } from "rxjs/operators";

// #1
let observable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

observable$
  .pipe(
    filter((x) => x % 2 === 0),
    tap((x) => console.log(x)),
    max(),
    tap((x) => {
      console.log("-------------");
      console.log("Maximum number is", x);
    })
  )
  .subscribe();

// #2

let numbers$ = of(1, 2, 3, 4, 6, 7, 8, 9, 10);

let _numbers = numbers$.pipe(
  filter((x) => x % 2 === 0),
  reduce((acc, value) => acc + value, 1)
);

var a = _numbers.subscribe((x) => console.log(x));
a.unsubscribe();
_numbers.subscribe((x) => console.log(x)); // will still run as it has diff ref

// #3

numbers$.pipe(count()).subscribe((x) => console.log(x));
