import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitInterviewquestionComponent } from './exit-interviewquestion.component';

describe('ExitInterviewquestionComponent', () => {
  let component: ExitInterviewquestionComponent;
  let fixture: ComponentFixture<ExitInterviewquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitInterviewquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitInterviewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
