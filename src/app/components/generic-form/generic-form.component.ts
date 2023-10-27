import { Component, Input, booleanAttribute } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

type INFO = {
  inputInfo?:string
  selectInfo?:string
  textAreaInfo?:string
}
@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent {

  sendInfo!:INFO
  success:boolean = false
  @Input({ transform: booleanAttribute }) input: boolean = true;
  @Input({ transform: booleanAttribute }) select: boolean = true;
  @Input({ transform: booleanAttribute }) textArea: boolean = true;

  
  form: FormGroup =  new FormGroup({
    inputInfo: new FormControl(null),
    selectInfo: new FormControl(null),
    textAreaInfo: new FormControl(null),
  });


  sendData(){
    this.sendInfo = this.form.value
    this.success = true
  }
}
