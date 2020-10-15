import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccounttypesComponent } from './bank-accounttypes.component';

describe('BankAccounttypesComponent', () => {
  let component: BankAccounttypesComponent;
  let fixture: ComponentFixture<BankAccounttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccounttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccounttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
