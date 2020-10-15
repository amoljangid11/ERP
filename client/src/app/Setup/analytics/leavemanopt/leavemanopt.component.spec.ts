import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanoptComponent } from './leavemanopt.component';

describe('LeavemanoptComponent', () => {
  let component: LeavemanoptComponent;
  let fixture: ComponentFixture<LeavemanoptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemanoptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemanoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
