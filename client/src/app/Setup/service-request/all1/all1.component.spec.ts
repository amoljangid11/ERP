import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { All1Component } from './all1.component';

describe('All1Component', () => {
  let component: All1Component;
  let fixture: ComponentFixture<All1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ All1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(All1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
