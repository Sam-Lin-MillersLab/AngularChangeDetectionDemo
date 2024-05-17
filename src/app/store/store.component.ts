import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksStore } from './books.store';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  store = inject(BooksStore);
  selected = signal<'asc' | 'desc'>('asc');
  selected$ = toObservable(this.selected);
  counterObservable = interval(1000);

  counter = toSignal(this.counterObservable, { initialValue: 0 });

  query = signal('');
  ngOnInit(): void {
    this.store.loadBooks();
  }

  constructor() {
    toObservable(this.selected).subscribe((s) => {
      console.log('selected', s);
    });
  }

  updateOrder(event: Event): void {
    this.store.updateOrder(this.selected());
  }

  updateQuery(event: Event): void {
    this.store.updateQuery(this.query());
  }
}
