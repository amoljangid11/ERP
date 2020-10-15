import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHolidaygroupComponent } from './manage-holidaygroup.component';

describe('ManageHolidaygroupComponent', () => {
  let component: ManageHolidaygroupComponent;
  let fixture: ComponentFixture<ManageHolidaygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHolidaygroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHolidaygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
