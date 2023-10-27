import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-checkbox-forms',
  templateUrl: './checkbox-forms.component.html',
  styleUrls: ['./checkbox-forms.component.css']
})
export class CheckboxFormsComponent  {
 

  check = signal('')
  formActive!: string


  changeForm(e: any) {
    this.check.set(e.value)
    const form = this.check.asReadonly()
    this.formActive = form()
  }
}
