import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServreqComponent } from './servreq.component';

describe('ServreqComponent', () => {
  let component: ServreqComponent;
  let fixture: ComponentFixture<ServreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
