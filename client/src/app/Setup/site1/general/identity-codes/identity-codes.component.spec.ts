import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCodesComponent } from './identity-codes.component';

describe('IdentityCodesComponent', () => {
  let component: IdentityCodesComponent;
  let fixture: ComponentFixture<IdentityCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
