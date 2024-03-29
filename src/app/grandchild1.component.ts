import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grandchild1',
  template: `
    <h3>Grandchild 1 Component</h3>
    <p>Counter: {{ counter.count }}</p>
    <button (click)="incCounter()">Inc Counter</button>
    {{ logCD() }}
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
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Grandchild1Component {
  counter = { count: 0 };
  incCounter() {
    this.counter.count++;
  }
  logCD() {
    console.log('Grandchild 1 Component - Change Detection');
  }
}
