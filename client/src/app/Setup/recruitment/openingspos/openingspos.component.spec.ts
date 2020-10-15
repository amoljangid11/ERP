import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsposComponent } from './openingspos.component';

describe('OpeningsposComponent', () => {
  let component: OpeningsposComponent;
  let fixture: ComponentFixture<OpeningsposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
