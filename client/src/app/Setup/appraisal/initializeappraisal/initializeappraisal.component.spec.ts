import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeAppraisalComponent } from './initializeappraisal.component';

describe('InitializeAppraisalComponent', () => {
  let component: InitializeAppraisalComponent;
  let fixture: ComponentFixture<InitializeAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializeAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializeAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
