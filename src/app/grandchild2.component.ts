import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-grandchild2',
  template: `
    <div>
      <h3>Grandchild 2 Component</h3>
      <div>global counter: {{ counterService.counter$ | async | json }}</div>
      <input type="text" [(ngModel)]="name" placeholder="Enter your name" />
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
  imports: [CommonModule, FormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Grandchild2Component {
  counterService = inject(CounterService);
  name = '';
  logCD() {
    console.log('Grandchild 2 Component - Change Detection');
  }
}
