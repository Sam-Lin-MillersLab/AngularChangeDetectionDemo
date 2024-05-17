import { computed, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Injectable } from '@angular/core';
export interface Book {
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getAll(): Promise<Book[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: 'Angular', author: 'Google' },
          { title: 'React', author: 'Facebook' },
          { title: 'Vue', author: 'Evan You' },
        ]);
      }, 1000);
    });
  }
}

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ books, filter }) => {
    const booksCount = computed(() => books().length);
    const sortedBooks = computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return books().toSorted(
        (a, b) => direction * a.title.localeCompare(b.title)
      );
    });

    const filteredBooks = computed(() => {
      const query = filter.query().toLowerCase();
      return sortedBooks().filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );
    });

    return {
      booksCount,
      sortedBooks,
      filteredBooks,
    };
  }),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },
    //loadBooks: pipe(
    //  debounceTime(300),
    //  distinctUntilChanged(),
    //  tap(() => patchState(store, { isLoading: true })),
    //  switchMap(() => booksService.getAll()),
    //  tap((books) => patchState(store, { books, isLoading: false }))
    //),

    loadBooks: () => {
      patchState(store, { isLoading: true });
      booksService.getAll().then((books) => {
        patchState(store, { books, isLoading: false });
      });
    },
  }))
);
