import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSettingComponent } from './exit-setting.component';

describe('ExitSettingComponent', () => {
  let component: ExitSettingComponent;
  let fixture: ComponentFixture<ExitSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
