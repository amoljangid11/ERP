import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateCheckstatusComponent } from './initiate-checkstatus.component';

describe('InitiateCheckstatusComponent', () => {
  let component: InitiateCheckstatusComponent;
  let fixture: ComponentFixture<InitiateCheckstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateCheckstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateCheckstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
