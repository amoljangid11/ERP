import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rejected1Component } from './rejected1.component';

describe('Rejected1Component', () => {
  let component: Rejected1Component;
  let fixture: ComponentFixture<Rejected1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rejected1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rejected1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
