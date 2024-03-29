import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grandchild1',
  template: `
    <div>
      <h3>Grandchild 1 Component</h3>
      <p>Counter: {{ counter }}</p>
      <button (click)="incCounter()">Inc Counter</button>
      {{ logCD() }}
    </div>
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
  counter = 0;
  incCounter() {
    this.counter++;
  }
  logCD() {
    console.log('Grandchild 1 Component - Change Detection');
  }
}
