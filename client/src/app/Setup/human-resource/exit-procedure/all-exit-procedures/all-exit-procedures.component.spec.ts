import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExitProceduresComponent } from './all-exit-procedures.component';

describe('AllExitProceduresComponent', () => {
  let component: AllExitProceduresComponent;
  let fixture: ComponentFixture<AllExitProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExitProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExitProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
