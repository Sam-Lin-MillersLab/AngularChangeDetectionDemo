import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h2>Child 2 Component</h2>
      <!-- <div>Counter: {{ counterService.counter$ | async }}</div> -->
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
        background-color: lightblue;
      }
    `,
  ],
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component {
  bgColor = 'lightblue';
  counterService = inject(CounterService);

  logCD() {
    console.log('Child 2 Component - Change Detection');
  }
}
