import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaimmigrationComponent } from './visaimmigration.component';

describe('VisaimmigrationComponent', () => {
  let component: VisaimmigrationComponent;
  let fixture: ComponentFixture<VisaimmigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaimmigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaimmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
