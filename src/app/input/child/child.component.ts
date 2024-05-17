import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  effect,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Person {
  name: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  firstName = input.required<string>({
    alias: 'fn',
  });

  //lastName = model.required<string>();
  lastName = input.required({
    transform: (value: string) => value.toUpperCase(),
  });

  shouldBeBool = input.required({
    transform: booleanAttribute,
  });

  displayName = computed(() => `${this.lastName()}, ${this.firstName()}`);

  isAdmin = model.required<boolean>();
  personChanged = output<Person>();

  constructor() {
    effect(
      () => {
        //this.lastName.update((value) => value.toUpperCase());
        this.personChanged.emit({
          name: this.displayName(),
          isAdmin: this.isAdmin(),
        });
      }
      //{
      //  allowSignalWrites: true,
      //}
    );
  }

  toggleNameChange() {
    // Cannot change the value of an input signal
    //this.firstName.set('Jane');
    //this.lastName.set('Doe');
    // Cannot change the value of the computed signal
    //this.displayName.set('Doe, Jane');
  }
}
