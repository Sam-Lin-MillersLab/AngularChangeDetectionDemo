import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Grandchild1Component } from './grandchild1.component';
import { Grandchild2Component } from './grandchild2.component';

@Component({
  selector: 'app-child1',
  template: `
    <h2>Child 1 Component</h2>
    <div class="child1">
      <app-grandchild1></app-grandchild1>
      <app-grandchild2></app-grandchild2>
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
      .child1 {
        display: flex;
        justify-content: space-between;
        background-color: lightblue;
      }
    `,
  ],
  standalone: true,
  imports: [Grandchild1Component, Grandchild2Component],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Child1Component {
  logCD() {
    console.log('Child 1 Component - Change Detection');
  }
}
