import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { 
	IgxGridModule,
	IgxButtonGroupModule
 } from "igniteui-angular";


import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AppComponent } from './app.component';
import { FormInitComponent } from './form-init/form-init.component';
import { DialogFormComponent } from './form-init/dialog-form/dialog-form.component';
import { TableComponent } from './table/table.component';
import { CheckboxFormsComponent } from './checkbox-forms/checkbox-forms.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInitComponent,
    DialogFormComponent,
    TableComponent,
    CheckboxFormsComponent,
    GenericFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    IgxGridModule,
	  IgxButtonGroupModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
