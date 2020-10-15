import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoleComponent } from './employee-role.component';

describe('EmployeeRoleComponent', () => {
  let component: EmployeeRoleComponent;
  let fixture: ComponentFixture<EmployeeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    console.log("one")
    fixture = TestBed.createComponent(EmployeeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
