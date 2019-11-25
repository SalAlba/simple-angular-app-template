import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules ...
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./modules/home/home.module";
import { PostesModule } from "./modules/postes/postes.module";

// components ...
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule, // in anular page ex. no import !!!  https://stackblitz.com/angular/aqqyljyojye
    PostesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
