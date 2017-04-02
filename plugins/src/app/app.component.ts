import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <select-shorten-demo></select-shorten-demo>
  `,
})
export class AppComponent  { name = 'Angular'; }
