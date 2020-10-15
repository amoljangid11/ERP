import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveComponent } from './my-leave.component';

describe('MyLeaveComponent', () => {
  let component: MyLeaveComponent;
  let fixture: ComponentFixture<MyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
