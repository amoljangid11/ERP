import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcandscreenComponent } from './empcandscreen.component';

describe('EmpcandscreenComponent', () => {
  let component: EmpcandscreenComponent;
  let fixture: ComponentFixture<EmpcandscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcandscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcandscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
