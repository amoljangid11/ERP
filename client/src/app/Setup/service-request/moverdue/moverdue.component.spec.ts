import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverdueComponent } from './moverdue.component';

describe('MoverdueComponent', () => {
  let component: MoverdueComponent;
  let fixture: ComponentFixture<MoverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
