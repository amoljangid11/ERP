import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationTimeComponent } from './configuration-time.component';

describe('ConfigurationTimeComponent', () => {
  let component: ConfigurationTimeComponent;
  let fixture: ComponentFixture<ConfigurationTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
