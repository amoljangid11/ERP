import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAppraisalComponent } from './managerappraisal.component';

describe('ManagerAppraisalComponent', () => {
  let component: ManagerAppraisalComponent;
  let fixture: ComponentFixture<ManagerAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
