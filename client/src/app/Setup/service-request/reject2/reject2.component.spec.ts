import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reject2Component } from './reject2.component';

describe('Reject2Component', () => {
  let component: Reject2Component;
  let fixture: ComponentFixture<Reject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
