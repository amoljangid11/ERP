import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Open1Component } from './open1.component';

describe('Open1Component', () => {
  let component: Open1Component;
  let fixture: ComponentFixture<Open1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Open1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Open1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
