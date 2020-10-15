import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationBgComponent } from './configuration-bg.component';

describe('ConfigurationBgComponent', () => {
  let component: ConfigurationBgComponent;
  let fixture: ComponentFixture<ConfigurationBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
