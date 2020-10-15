import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Duetoday1Component } from './duetoday1.component';

describe('Duetoday1Component', () => {
  let component: Duetoday1Component;
  let fixture: ComponentFixture<Duetoday1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Duetoday1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Duetoday1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
