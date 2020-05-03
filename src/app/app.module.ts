import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { NestedFormsComponent } from './components/nested-forms/nested-forms.component';
import { ArrayFormsComponent } from './components/array-forms/array-forms.component';
import { ValidationFormsComponent } from './components/validation-forms/validation-forms.component';
import { SubmitFormsComponent } from './components/submit-forms/submit-forms.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PmMaterialModule } from './material-module';
import { DialogeExampleComponent } from './dialoge-example/dialoge-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormsComponent,
    NestedFormsComponent,
    ArrayFormsComponent,
    ValidationFormsComponent,
    SubmitFormsComponent,
    DialogeExampleComponent
  ],
  entryComponents: [DialogeExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PmMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
