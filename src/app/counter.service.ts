// create a service with behavior subject
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = { count: 0 };
  counterSubject = new BehaviorSubject<Counter>(this.counter);

  constructor() {}
  incCounter() {
    this.counter.count++;
    // this.counterSubject.next(this.counter);
  }
  get counter$() {
    return this.counterSubject.asObservable();
  }
}
export interface Counter {
  count: number;
}
