import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
   name: string;
   lastName:string;
   email:string;
   phone:string;
   country:string;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent {

  dialogData:DialogData = {
    country: '',
    email: '',
    lastName: '',
    name: '',
    phone: ''
  }
  
  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data:DialogData) {
      this.dialogData = data;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
