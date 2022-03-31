import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AssignmentFormsComponent } from './assignment-forms/assignment-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AssignmentReactiveFormsComponent } from './assignment-reactive-forms/assignment-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentFormsComponent,
    ReactiveFormComponent,
    AssignmentReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
