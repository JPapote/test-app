import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFormsComponent } from './checkbox-forms.component';

describe('CheckboxFormsComponent', () => {
  let component: CheckboxFormsComponent;
  let fixture: ComponentFixture<CheckboxFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxFormsComponent]
    });
    fixture = TestBed.createComponent(CheckboxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
