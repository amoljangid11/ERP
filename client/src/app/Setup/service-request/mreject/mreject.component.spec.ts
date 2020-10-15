import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrejectComponent } from './mreject.component';

describe('MrejectComponent', () => {
  let component: MrejectComponent;
  let fixture: ComponentFixture<MrejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
