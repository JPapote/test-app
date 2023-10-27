import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInitComponent } from './form-init.component';

describe('FormInitComponent', () => {
  let component: FormInitComponent;
  let fixture: ComponentFixture<FormInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInitComponent]
    });
    fixture = TestBed.createComponent(FormInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
