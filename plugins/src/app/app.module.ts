import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectShortenDemoComponent } from './select-shorten-demo.component';
import { SelectShortenPipe } from "./select-shorten.pipe";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    SelectShortenDemoComponent,
    SelectShortenPipe,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
