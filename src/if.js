import { iif, of } from "rxjs";
import { mergeMap, first, last } from "rxjs/operators";

let taskObserver$ = iif(
  () => (Math.random() + 1) % 2 === 0,
  of("Even Case"),
  of("Odd Case")
);

taskObserver$.subscribe((value) => console.log(value));
