import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRootComponent } from './setup-root.component';

describe('SetupRootComponent', () => {
  let component: SetupRootComponent;
  let fixture: ComponentFixture<SetupRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
