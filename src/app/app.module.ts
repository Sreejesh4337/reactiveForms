import { HttpClientModule } from '@angular/common/http';
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
import { SideNavComponent } from './components/side-nav/side-nav.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BigCityTaskComponent } from './components/big-city-task/big-city-task.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormsComponent,
    NestedFormsComponent,
    ArrayFormsComponent,
    ValidationFormsComponent,
    SubmitFormsComponent,
    DialogeExampleComponent,
    SideNavComponent,
    BigCityTaskComponent
  ],
  entryComponents: [DialogeExampleComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PmMaterialModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      unitsFontSize: '27',
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#78E2CE',
      outerStrokeGradientStopColor: '#78E2CE',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      titleFontSize: '36',
      subtitleFontSize: '24',
      animateTitle: false,
      animationDuration: 1000,
      showTitle: true,
      showUnits: true,
      showSubtitle: false,
      showBackground: false,
      showInnerStroke: false,
      startFromZero: true,
      unitsColor: '#78E2CE',
      titleColor : '#78E2CE'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
