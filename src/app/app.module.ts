import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuALianzaComponent } from './menu-alianza/menu-alianza.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuALianzaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
