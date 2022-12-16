import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heros/hero/hero.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './heros/list/list.component';
import { HerosModule } from './heros/heros.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    CounterComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
