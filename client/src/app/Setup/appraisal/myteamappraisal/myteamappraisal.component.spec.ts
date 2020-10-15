import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamAppraisalComponent } from './myteamappraisal.component';

describe('MyTeamAppraisalComponent', () => {
  let component: MyTeamAppraisalComponent;
  let fixture: ComponentFixture<MyTeamAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamAppraisalComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

