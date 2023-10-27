import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInitComponent } from './form-init/form-init.component';
import { TableComponent } from './table/table.component';
import { CheckboxFormsComponent } from './checkbox-forms/checkbox-forms.component';

const routes: Routes = [
  {path:'', component: FormInitComponent},
  {path:'table', component: TableComponent},
  {path:'checkForm', component: CheckboxFormsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
