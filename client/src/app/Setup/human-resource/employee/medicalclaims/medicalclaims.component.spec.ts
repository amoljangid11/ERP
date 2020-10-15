import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalclaimsComponent } from './medicalclaims.component';

describe('MedicalclaimsComponent', () => {
  let component: MedicalclaimsComponent;
  let fixture: ComponentFixture<MedicalclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
