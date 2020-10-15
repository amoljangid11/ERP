import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavesumComponent } from './empleavesum.component';

describe('EmpleavesumComponent', () => {
  let component: EmpleavesumComponent;
  let fixture: ComponentFixture<EmpleavesumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleavesumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleavesumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
