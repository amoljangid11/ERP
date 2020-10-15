import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryServicetypesComponent } from './military-servicetypes.component';

describe('MilitaryServicetypesComponent', () => {
  let component: MilitaryServicetypesComponent;
  let fixture: ComponentFixture<MilitaryServicetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryServicetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryServicetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
