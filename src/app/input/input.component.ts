import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent, Person } from './child/child.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  isAdmin = signal(false);

  firstName = signal('');
  lastName = signal('');

  boolText = signal<string>('false');

  onPersonChange(person: Person) {
    console.log(person);
  }

  onAdminChange() {
    console.log('admin changed');
  }
}
