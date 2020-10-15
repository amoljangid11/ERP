import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamincidentComponent } from './teamincident.component';

describe('TeamincidentComponent', () => {
  let component: TeamincidentComponent;
  let fixture: ComponentFixture<TeamincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
