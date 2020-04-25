import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

const mySubject$ = new Subject();
mySubject$.subscribe((val) => console.log("Subscribe 1=>", val));
mySubject$.next("1");
mySubject$.next("2");
//mySubject$.complete(); // will completely ignore Subscribe 2 & 3
//mySubject$.unsubscribe(); // will throw and error for Subscribe 2 & 3
mySubject$.subscribe((val) => console.log("Subscribe 2=>", val));
mySubject$.next("3");
mySubject$.subscribe((val) => console.log("Subscribe 3=>", val));
mySubject$.next("4");

// Subject will not have the latest value
// output => Sub 1 => 1, 2, 3, 4 ; Sub 2 => 3, 4 ; Sub 3 => 4

console.log("-----------------------------------");

const myBehaviourSubject$ = new BehaviorSubject("0");
myBehaviourSubject$.subscribe((val) => console.log("Beh. Subscribe 1=>", val));
myBehaviourSubject$.next("1");
myBehaviourSubject$.next("2");
myBehaviourSubject$.subscribe((val) => console.log("Beh. Subscribe 2=>", val));
myBehaviourSubject$.next("3");
myBehaviourSubject$.subscribe((val) => console.log("Beh. Subscribe 3=>", val));
myBehaviourSubject$.next("4");

// Behaviour Subject will have the latest value
// output => Sub 1 =>0, 1, 2, 3, 4 ; Sub 2 => 2, 3, 4 ; Sub 3 => 3, 4

console.log("-----------------------------------");

const myReplaySubject$ = new ReplaySubject();
myReplaySubject$.subscribe((val) => console.log("Replay Subscribe 1=>", val));
myReplaySubject$.next("1");
myReplaySubject$.next("2");
myReplaySubject$.subscribe((val) => console.log("Replay Subscribe 2=>", val));
myReplaySubject$.next("3");
myReplaySubject$.subscribe((val) => console.log("Replay Subscribe 3=>", val));
myReplaySubject$.next("4");

// Replay Subject will have all the old values stored
// output => Sub 1 =>1, 2, 3, 4 ; Sub 2 => 1, 2, 3, 4 ; Sub 3 => 1, 2, 3, 4

console.log("-----------------------------------");

const asyncSubject$ = new AsyncSubject();

asyncSubject$.subscribe({
  next: (v) => console.log(`ObserverA: ${v}`),
});

asyncSubject$.next(1);
asyncSubject$.next(2);
asyncSubject$.next(3);
asyncSubject$.next(4);

asyncSubject$.subscribe({
  next: (v) => console.log(`ObserverB: ${v}`),
});

asyncSubject$.next(5);
asyncSubject$.complete();

// async Subject will wait for the last value before complete
// Logs:
// observerA: 5
// observerB: 5
