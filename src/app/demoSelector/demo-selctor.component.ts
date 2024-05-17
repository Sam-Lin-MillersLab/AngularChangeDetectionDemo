import { Component, computed, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type DemoPages = 'signal' | 'input' | 'view' | 'store';

@Component({
  selector: 'app-demo-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo-selector.component.html',
  styleUrl: './demo-selector.component.scss',
})
export class DemoSelctorComponent {
  demoPage = model.required<DemoPages>();
}
