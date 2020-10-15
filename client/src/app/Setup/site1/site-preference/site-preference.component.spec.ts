import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePreferenceComponent } from './site-preference.component';

describe('SitePreferenceComponent', () => {
  let component: SitePreferenceComponent;
  let fixture: ComponentFixture<SitePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
