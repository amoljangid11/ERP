import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetimesheetComponent } from './employeetimesheet.component';

describe('EmployeetimesheetComponent', () => {
  let component: EmployeetimesheetComponent;
  let fixture: ComponentFixture<EmployeetimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
