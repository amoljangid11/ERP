import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCandidateComponent } from './employee-candidate.component';

describe('EmployeeCandidateComponent', () => {
  let component: EmployeeCandidateComponent;
  let fixture: ComponentFixture<EmployeeCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
