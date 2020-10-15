import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateRetirementComponent } from './terminate-retirement.component';

describe('TerminateRetirementComponent', () => {
  let component: TerminateRetirementComponent;
  let fixture: ComponentFixture<TerminateRetirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateRetirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
