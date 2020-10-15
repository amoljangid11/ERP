import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSummaryComponent } from './emp-summary.component';

describe('EmpSummaryComponent', () => {
  let component: EmpSummaryComponent;
  let fixture: ComponentFixture<EmpSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
