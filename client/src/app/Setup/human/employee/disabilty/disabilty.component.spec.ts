import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabiltyComponent } from './disabilty.component';

describe('DisabiltyComponent', () => {
  let component: DisabiltyComponent;
  let fixture: ComponentFixture<DisabiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
