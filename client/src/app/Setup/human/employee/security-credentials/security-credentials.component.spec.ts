import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCredentialsComponent } from './security-credentials.component';

describe('SecurityCredentialsComponent', () => {
  let component: SecurityCredentialsComponent;
  let fixture: ComponentFixture<SecurityCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
