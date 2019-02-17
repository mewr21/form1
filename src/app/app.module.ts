import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms' 
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailComponent,
    BrowserModule,
    FormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
