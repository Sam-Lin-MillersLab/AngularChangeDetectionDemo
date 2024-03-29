import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h2>Child 2 Component</h2>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component {
  bgColor = 'lightblue';
  logCD() {
    console.log('Child 2 Component - Change Detection');
  }
}
