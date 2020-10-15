import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAppraisalComponent } from './selfappraisal.component';

describe('SelfAppraisalComponent', () => {
  let component: SelfAppraisalComponent;
  let fixture: ComponentFixture<SelfAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

