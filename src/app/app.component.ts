import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { SignalComponent } from './signal/signal.component';
import { FormsModule } from '@angular/forms';
import {
  DemoSelctorComponent,
  DemoPages,
} from './demoSelector/demo-selctor.component';

import { InputComponent } from './input/input.component';
import { ViewComponent } from './view/view.component';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Root Component</h1>
  //   <div class="root">
  //     <app-child1></app-child1>
  //     <app-child2></app-child2>
  //     {{ logCD() }}
  //   </div>
  // `,
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
        margin: 10px;
        background-color: lightgray;
      }
      .root {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    Child1Component,
    Child2Component,
    SignalComponent,
    FormsModule,
    DemoSelctorComponent,
    InputComponent,
    ViewComponent,
    StoreComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  logCD() {
    console.log('Root Component - Change Detection');
  }

  demoPage = signal<DemoPages>('signal');
}
