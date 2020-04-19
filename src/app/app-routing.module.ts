import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { NestedFormsComponent } from './components/nested-forms/nested-forms.component';
import { ArrayFormsComponent } from './components/array-forms/array-forms.component';
import { ValidationFormsComponent } from './components/validation-forms/validation-forms.component';
import { SubmitFormsComponent } from './components/submit-forms/submit-forms.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BasicFormsComponent
  },
  {
    path: 'nested',
    pathMatch: 'full',
    component: NestedFormsComponent
  },
  {
    path: 'array',
    pathMatch: 'full',
    component: ArrayFormsComponent
  },
  {
    path: 'validation',
    pathMatch: 'full',
    component: ValidationFormsComponent
  },
  {
    path: 'submit',
    pathMatch: 'full',
    component: SubmitFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
