import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTasksComponent } from './default-tasks.component';

describe('DefaultTasksComponent', () => {
  let component: DefaultTasksComponent;
  let fixture: ComponentFixture<DefaultTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
