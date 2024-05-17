import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  effect,
  inject,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignalComponent } from '../signal/signal.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormsModule, SignalComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ViewComponent implements OnInit {
  signalEl = viewChild.required<SignalComponent>('el');
  divEls = viewChildren<HTMLDivElement>('div');

  divCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  childStatus = computed(() =>
    this.signalEl().count() >= 0 ? 'Positive' : 'Negative'
  );

  constructor() {
    effect(() => {
      console.log('SignalComponent count:', this.signalEl().count());
    });
  }

  ngOnInit() {
    this.signalEl().set(10);
  }
}
