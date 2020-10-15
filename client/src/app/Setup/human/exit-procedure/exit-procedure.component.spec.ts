import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitProcedureComponent } from './exit-procedure.component';

describe('ExitProcedureComponent', () => {
  let component: ExitProcedureComponent;
  let fixture: ComponentFixture<ExitProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
