import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSettingsComponent } from './home-settings.component';

describe('HomeSettingsComponent', () => {
  let component: HomeSettingsComponent;
  let fixture: ComponentFixture<HomeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
