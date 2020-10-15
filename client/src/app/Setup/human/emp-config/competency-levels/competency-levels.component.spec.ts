import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyLevelsComponent } from './competency-levels.component';

describe('CompetencyLevelsComponent', () => {
  let component: CompetencyLevelsComponent;
  let fixture: ComponentFixture<CompetencyLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
