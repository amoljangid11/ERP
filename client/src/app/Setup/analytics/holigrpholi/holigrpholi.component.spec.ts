import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoligrpholiComponent } from './holigrpholi.component';

describe('HoligrpholiComponent', () => {
  let component: HoligrpholiComponent;
  let fixture: ComponentFixture<HoligrpholiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoligrpholiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoligrpholiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
