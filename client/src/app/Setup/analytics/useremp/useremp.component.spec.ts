import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserempComponent } from './useremp.component';

describe('UserempComponent', () => {
  let component: UserempComponent;
  let fixture: ComponentFixture<UserempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
