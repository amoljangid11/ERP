import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Toapprove1Component } from './toapprove1.component';

describe('Toapprove1Component', () => {
  let component: Toapprove1Component;
  let fixture: ComponentFixture<Toapprove1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Toapprove1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Toapprove1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
