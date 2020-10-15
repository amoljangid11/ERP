import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedinterviewComponent } from './schedinterview.component';

describe('SchedinterviewComponent', () => {
  let component: SchedinterviewComponent;
  let fixture: ComponentFixture<SchedinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
