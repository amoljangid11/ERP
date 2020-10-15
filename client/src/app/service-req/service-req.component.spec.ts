import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReqComponent } from './service-req.component';

describe('ServiceReqComponent', () => {
  let component: ServiceReqComponent;
  let fixture: ComponentFixture<ServiceReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
