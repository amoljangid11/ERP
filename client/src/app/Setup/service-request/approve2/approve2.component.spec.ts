import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Approve2Component } from './approve2.component';

describe('Approve2Component', () => {
  let component: Approve2Component;
  let fixture: ComponentFixture<Approve2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Approve2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Approve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
