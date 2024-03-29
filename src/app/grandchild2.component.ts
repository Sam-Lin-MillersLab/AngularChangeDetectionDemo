import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grandchild2',
  template: `
    <div>
      <h3>Grandchild 2 Component</h3>
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
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Grandchild2Component {
  name = '';
  logCD() {
    console.log('Grandchild 2 Component - Change Detection');
  }
}
