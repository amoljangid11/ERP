import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UselogComponent } from './uselog.component';

describe('UselogComponent', () => {
  let component: UselogComponent;
  let fixture: ComponentFixture<UselogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UselogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UselogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
