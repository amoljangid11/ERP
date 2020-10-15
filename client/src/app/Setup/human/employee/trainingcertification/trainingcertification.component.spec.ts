import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcertificationComponent } from './trainingcertification.component';

describe('TrainingcertificationComponent', () => {
  let component: TrainingcertificationComponent;
  let fixture: ComponentFixture<TrainingcertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingcertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingcertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
