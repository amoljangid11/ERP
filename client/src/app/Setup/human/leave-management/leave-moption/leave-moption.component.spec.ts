import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMoptionComponent } from './leave-moption.component';

describe('LeaveMoptionComponent', () => {
  let component: LeaveMoptionComponent;
  let fixture: ComponentFixture<LeaveMoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveMoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveMoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
