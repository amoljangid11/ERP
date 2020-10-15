import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimemananalyComponent } from './timemananaly.component';

describe('TimemananalyComponent', () => {
  let component: TimemananalyComponent;
  let fixture: ComponentFixture<TimemananalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimemananalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimemananalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
