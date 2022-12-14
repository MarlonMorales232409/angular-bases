import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heros/hero/hero.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './heros/list/list.component';

@NgModule({
  declarations: [
    CounterComponent,
    AppComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
