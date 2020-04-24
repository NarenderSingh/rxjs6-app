import { of } from "rxjs";
import { map } from "rxjs/operators";

map((x) => x * x)(of(1, 2, 3, 4)).subscribe((v) =>
  console.log(`Output is: ${v}`)
);
