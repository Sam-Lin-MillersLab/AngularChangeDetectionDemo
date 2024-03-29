import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GrandGrandchild1Component } from './grandgrandchild1.component';

@Component({
  selector: 'app-grandchild1',
  template: `
    <h3>Grandchild 1 Component</h3>
    <p>Counter: {{ counter | json }}</p>
    <button (click)="incCounter()">Inc Counter</button>
    {{ logCD() }}
    <app-grandgrandchild1 [counter]="counter"></app-grandgrandchild1>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 45%;
        padding: 10px;
        margin: 10px;
        background-color: lightcoral;
      }
    `,
  ],
  standalone: true,
  imports: [JsonPipe, GrandGrandchild1Component],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Grandchild1Component {
  counter = { count: 0 };
  incCounter() {
    this.counter = { count: this.counter.count + 1 };
  }
  logCD() {
    console.log('Grandchild 1 Component - Change Detection');
  }
}
