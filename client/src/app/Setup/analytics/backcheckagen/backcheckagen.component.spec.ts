import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackcheckagenComponent } from './backcheckagen.component';

describe('BackcheckagenComponent', () => {
  let component: BackcheckagenComponent;
  let fixture: ComponentFixture<BackcheckagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackcheckagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackcheckagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
