import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  count = signal(0);
  regularCount = 0;

  iCount = 0;

  currentCount = computed(() => `Current count: ${this.count()}`);
  regularCurrentCount = computed(
    () => `Regular current count: ${this.regularCount}`
  );

  increment() {
    this.count.update((value) => value + 1);
    this.regularCount++;
  }

  decrement() {
    this.count.update((value) => value - 1);
    this.regularCount--;
  }

  reset() {
    this.count.set(0);
    this.regularCount = 0;
  }

  set(value: number) {
    this.count.set(value);
    this.regularCount = value;
    this.iCount = 0;
  }
}
