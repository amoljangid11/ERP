import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sentforapproval1Component } from './sentforapproval1.component';

describe('Sentforapproval1Component', () => {
  let component: Sentforapproval1Component;
  let fixture: ComponentFixture<Sentforapproval1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sentforapproval1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sentforapproval1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
