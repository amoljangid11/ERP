import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrproleempComponent } from './grproleemp.component';

describe('GrproleempComponent', () => {
  let component: GrproleempComponent;
  let fixture: ComponentFixture<GrproleempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrproleempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrproleempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
