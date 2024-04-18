import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesPageComponent } from './practices-page.component';

describe('PracticesPageComponent', () => {
  let component: PracticesPageComponent;
  let fixture: ComponentFixture<PracticesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
