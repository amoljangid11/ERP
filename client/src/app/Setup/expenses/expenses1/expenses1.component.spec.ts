import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expenses1Component } from './expenses1.component';

describe('Expenses1Component', () => {
  let component: Expenses1Component;
  let fixture: ComponentFixture<Expenses1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expenses1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expenses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
