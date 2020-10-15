import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overdue1Component } from './overdue1.component';

describe('Overdue1Component', () => {
  let component: Overdue1Component;
  let fixture: ComponentFixture<Overdue1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overdue1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overdue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
