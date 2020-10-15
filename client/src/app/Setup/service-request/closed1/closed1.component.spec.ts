import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Closed1Component } from './closed1.component';

describe('Closed1Component', () => {
  let component: Closed1Component;
  let fixture: ComponentFixture<Closed1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Closed1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Closed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
