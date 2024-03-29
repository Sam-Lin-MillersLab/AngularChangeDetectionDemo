import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h2>Child 2 Component</h2>
      <div>Global Counter: {{ counter | json }}</div>
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
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component implements OnInit {
  bgColor = 'lightblue';
  counter = { count: 0 };
  counterService = inject(CounterService);
  changeDetectorRef = inject(ChangeDetectorRef);
  ngOnInit(): void {
    this.counterService.counter$.subscribe((counter) => {
      console.log('Child 2 Component - Counter: ', { counter });
      this.counter = counter;
      // this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.markForCheck();
    });
  }

  logCD() {
    console.log('Child 2 Component - Change Detection');
  }
}
