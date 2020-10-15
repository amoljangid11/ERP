import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningTypeComponent } from './screening-type.component';

describe('ScreeningTypeComponent', () => {
  let component: ScreeningTypeComponent;
  let fixture: ComponentFixture<ScreeningTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
