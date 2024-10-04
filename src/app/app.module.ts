import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { AddCharacterComponent } from './dbx/componets/add-character/add-character.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
