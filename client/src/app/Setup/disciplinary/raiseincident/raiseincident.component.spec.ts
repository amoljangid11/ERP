import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseincidentComponent } from './raiseincident.component';

describe('RaiseincidentComponent', () => {
  let component: RaiseincidentComponent;
  let fixture: ComponentFixture<RaiseincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
