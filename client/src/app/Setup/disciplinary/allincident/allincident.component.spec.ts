import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllincidentComponent } from './allincident.component';

describe('AllincidentComponent', () => {
  let component: AllincidentComponent;
  let fixture: ComponentFixture<AllincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
