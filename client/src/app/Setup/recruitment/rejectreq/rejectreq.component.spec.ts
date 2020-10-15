import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectreqComponent } from './rejectreq.component';

describe('RejectreqComponent', () => {
  let component: RejectreqComponent;
  let fixture: ComponentFixture<RejectreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
