import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentiComponent } from './commenti.component';

describe('CommentiComponent', () => {
  let component: CommentiComponent;
  let fixture: ComponentFixture<CommentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
