import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McancelledComponent } from './mcancelled.component';

describe('McancelledComponent', () => {
  let component: McancelledComponent;
  let fixture: ComponentFixture<McancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
