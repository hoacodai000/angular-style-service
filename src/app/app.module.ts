import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MainComponent,
  ComponentChildAComponent,
  ComponentChildBComponent
} from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComponentChildAComponent,
    ComponentChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
