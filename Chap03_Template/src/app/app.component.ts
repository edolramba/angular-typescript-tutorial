import { A01Component } from './components/A01.template.component';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Chap02 Template</h1>
  <a09Component></a09Component>
  `
})
export class AppComponent  { name = 'Angular'; }
