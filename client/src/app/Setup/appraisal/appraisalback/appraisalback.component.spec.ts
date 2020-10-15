import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalbackComponent } from './appraisalback.component';

describe('AppraisalbackComponent', () => {
  let component: AppraisalbackComponent;
  let fixture: ComponentFixture<AppraisalbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

