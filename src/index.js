import { from } from "rxjs";
import { max, min } from "rxjs/operators";

const numbers = [1, 6, 15, 10, 58, 2, 40];
from(numbers)
  .pipe(max((a, b) => a - b))
  .subscribe((x) => console.log("The Max value is " + x));
