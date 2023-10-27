import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@Component({
  selector: 'app-form-init',
  templateUrl: './form-init.component.html',
  styleUrls: ['./form-init.component.css']
})
export class FormInitComponent {

  form: FormGroup

  constructor(private dialog: MatDialog) {
    this.form = new FormGroup({
      name: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(),
      country: new FormControl(null),
    });
  }


  sendData(){
   /*  console.log(this.form.value); */
    this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: this.form.value
    })
  }
}

