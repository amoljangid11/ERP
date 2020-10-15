import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimesheetComponent } from './employee-timesheet.component';

describe('EmployeeTimesheetComponent', () => {
  let component: EmployeeTimesheetComponent;
  let fixture: ComponentFixture<EmployeeTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
