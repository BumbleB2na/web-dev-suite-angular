import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectShortenDemoComponent } from './select-shorten-demo.component';
import { SelectShortenPipe } from "./select-shorten.pipe";
import { SelectShortenComponent } from "./select-shorten.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    SelectShortenDemoComponent,
    SelectShortenPipe,
    SelectShortenComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
