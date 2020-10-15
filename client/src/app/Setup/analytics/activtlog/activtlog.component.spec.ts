import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivtlogComponent } from './activtlog.component';

describe('ActivtlogComponent', () => {
  let component: ActivtlogComponent;
  let fixture: ComponentFixture<ActivtlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivtlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivtlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
