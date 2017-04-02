import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectShortenDemoComponent } from './select-shorten-demo.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    SelectShortenDemoComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
