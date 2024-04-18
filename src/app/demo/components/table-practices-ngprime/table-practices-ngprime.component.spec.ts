import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePracticesNgprimeComponent } from './table-practices-ngprime.component';

describe('TablePracticesNgprimeComponent', () => {
  let component: TablePracticesNgprimeComponent;
  let fixture: ComponentFixture<TablePracticesNgprimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePracticesNgprimeComponent]
    });
    fixture = TestBed.createComponent(TablePracticesNgprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
