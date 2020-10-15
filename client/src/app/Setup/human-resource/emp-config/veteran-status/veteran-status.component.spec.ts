import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranStatusComponent } from './veteran-status.component';

describe('VeteranStatusComponent', () => {
  let component: VeteranStatusComponent;
  let fixture: ComponentFixture<VeteranStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteranStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
