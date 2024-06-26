import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
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
  imports: [Child1Component, Child2Component],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  logCD() {
    console.log('Root Component - Change Detection');
  }
}
