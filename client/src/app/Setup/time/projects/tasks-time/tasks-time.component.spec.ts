import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTimeComponent } from './tasks-time.component';

describe('TasksTimeComponent', () => {
  let component: TasksTimeComponent;
  let fixture: ComponentFixture<TasksTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
