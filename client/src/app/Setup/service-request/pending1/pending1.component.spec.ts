import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pending1Component } from './pending1.component';

describe('Pending1Component', () => {
  let component: Pending1Component;
  let fixture: ComponentFixture<Pending1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pending1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pending1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
