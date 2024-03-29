import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <button (click)="incCounter()">global counter</button>
    <p>Counter: {{ counterService.counter$ | async | json }}</p>
    <div class="root">
      <app-child1></app-child1>
      <app-child2></app-child2>
      {{ logCD() }}
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
        margin: 10px;
        background-color: lightgray;
      }
      .root {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
  standalone: true,
  imports: [AsyncPipe, Child1Component, Child2Component, JsonPipe],
  providers: [CounterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  counterService = inject(CounterService);
  constructor() {
    this.counterService.counter$.subscribe((counter) => {
      console.log('Root Component - Counter: ', { counter });
    });
  }
  incCounter() {
    this.counterService.incCounter();
  }
  logCD() {
    console.log('Root Component - Change Detection');
  }
}
