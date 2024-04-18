import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeStepsComponent } from './practice-steps.component';

describe('PracticeStepsComponent', () => {
  let component: PracticeStepsComponent;
  let fixture: ComponentFixture<PracticeStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
