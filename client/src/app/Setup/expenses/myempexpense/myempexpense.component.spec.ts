import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyempexpenseComponent } from './myempexpense.component';

describe('MyempexpenseComponent', () => {
  let component: MyempexpenseComponent;
  let fixture: ComponentFixture<MyempexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyempexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyempexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
