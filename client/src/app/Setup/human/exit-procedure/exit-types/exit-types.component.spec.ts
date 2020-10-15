import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitTypesComponent } from './exit-types.component';

describe('ExitTypesComponent', () => {
  let component: ExitTypesComponent;
  let fixture: ComponentFixture<ExitTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
