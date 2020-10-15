import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpappraiComponent } from './empapprai.component';

describe('EmpappraiComponent', () => {
  let component: EmpappraiComponent;
  let fixture: ComponentFixture<EmpappraiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpappraiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpappraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
