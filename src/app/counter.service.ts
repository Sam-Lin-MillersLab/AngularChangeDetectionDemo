// create a service with behavior subject
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counterSubject = new BehaviorSubject<number>(0);

  constructor() {}
  incCounter() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }
  get counter$() {
    return this.counterSubject.asObservable();
  }
}
