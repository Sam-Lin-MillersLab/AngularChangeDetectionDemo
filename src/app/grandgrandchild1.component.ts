import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grandgrandchild1',
  template: `
    <h3>GrandGrandchild 1 Component</h3>
    <p>Counter: {{ counter | json }}</p>
    {{ logCD() }}
  `,
  styles: [
    `
      :host {
        display: block;
        width: 45%;
        padding: 10px;
        margin: 10px;
        background-color: lightgreen;
      }
    `,
  ],
  standalone: true,
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandGrandchild1Component {
  @Input() counter: { count: number } | undefined;

  logCD() {
    console.log('GrandGrandchild 1 Component - Change Detection');
  }
}
