import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEligibilityComponent } from './work-eligibility.component';

describe('WorkEligibilityComponent', () => {
  let component: WorkEligibilityComponent;
  let fixture: ComponentFixture<WorkEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
