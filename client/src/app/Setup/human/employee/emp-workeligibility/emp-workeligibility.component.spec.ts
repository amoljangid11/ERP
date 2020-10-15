import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpWorkeligibilityComponent } from './emp-workeligibility.component';

describe('EmpWorkeligibilityComponent', () => {
  let component: EmpWorkeligibilityComponent;
  let fixture: ComponentFixture<EmpWorkeligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpWorkeligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpWorkeligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
