import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpConfigComponent } from './emp-config.component';

describe('EmpConfigComponent', () => {
  let component: EmpConfigComponent;
  let fixture: ComponentFixture<EmpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
