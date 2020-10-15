import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovereqComponent } from './approvereq.component';

describe('ApprovereqComponent', () => {
  let component: ApprovereqComponent;
  let fixture: ComponentFixture<ApprovereqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovereqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
