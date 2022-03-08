import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFComponent } from './input-f/input-f.component';
import { InputSComponent } from './input-s/input-s.component';
import { InputTComponent } from './input-t/input-t.component';
import { InputFoComponent } from './input-fo/input-fo.component';
import { InputFiComponent } from './input-fi/input-fi.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFComponent,
    InputSComponent,
    InputTComponent,
    InputFoComponent,
    InputFiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
