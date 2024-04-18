import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataPracticeComponent } from './form-data-practice.component';

describe('FormDataPracticeComponent', () => {
  let component: FormDataPracticeComponent;
  let fixture: ComponentFixture<FormDataPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDataPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDataPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
