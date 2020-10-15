import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdueTodayComponent } from './mdue-today.component';

describe('MdueTodayComponent', () => {
  let component: MdueTodayComponent;
  let fixture: ComponentFixture<MdueTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdueTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdueTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
