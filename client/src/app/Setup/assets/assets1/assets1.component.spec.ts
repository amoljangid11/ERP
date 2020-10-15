import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assets1Component } from './assets1.component';

describe('Assets1Component', () => {
  let component: Assets1Component;
  let fixture: ComponentFixture<Assets1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assets1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
