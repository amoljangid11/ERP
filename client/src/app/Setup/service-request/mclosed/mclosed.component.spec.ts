import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MclosedComponent } from './mclosed.component';

describe('MclosedComponent', () => {
  let component: MclosedComponent;
  let fixture: ComponentFixture<MclosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MclosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
