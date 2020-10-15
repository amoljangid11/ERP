import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancelled1Component } from './cancelled1.component';

describe('Cancelled1Component', () => {
  let component: Cancelled1Component;
  let fixture: ComponentFixture<Cancelled1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cancelled1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cancelled1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
