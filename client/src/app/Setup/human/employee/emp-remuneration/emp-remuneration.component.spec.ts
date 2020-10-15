import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRemunerationComponent } from './emp-remuneration.component';

describe('EmpRemunerationComponent', () => {
  let component: EmpRemunerationComponent;
  let fixture: ComponentFixture<EmpRemunerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRemunerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
