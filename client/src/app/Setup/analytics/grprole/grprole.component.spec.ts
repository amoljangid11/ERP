import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrproleComponent } from './grprole.component';

describe('GrproleComponent', () => {
  let component: GrproleComponent;
  let fixture: ComponentFixture<GrproleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrproleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrproleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
