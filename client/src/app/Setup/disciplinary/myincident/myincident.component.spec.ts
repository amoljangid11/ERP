import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyincidentComponent } from './myincident.component';

describe('MyincidentComponent', () => {
  let component: MyincidentComponent;
  let fixture: ComponentFixture<MyincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
