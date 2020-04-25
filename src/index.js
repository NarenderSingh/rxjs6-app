import { Observable } from "rxjs";

// First way to create observable

const observer = new Observable((subscriber) => {
  try {
    subscriber.next("Hello");
    subscriber.next("World");
    subscriber.complete();
  } catch (e) {
    subscriber.error(e);
  }
});

observer.subscribe(
  (value) => console.log(value), // success
  (error) => console.log(error), // error
  () => console.log("completed") // completed
);

// Second way to create Observable

const observerOne = Observable.create((sub) => {
  try {
    sub.next("Hello");
    sub.next("World");
    sub.complete();
  } catch (e) {
    sub.error(e);
  }
});

observerOne.subscribe(
  (d) => console.log(d),
  (e) => console.log(e),
  () => console.log("completed")
);
