import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiunitComponent } from './busiunit.component';

describe('BusiunitComponent', () => {
  let component: BusiunitComponent;
  let fixture: ComponentFixture<BusiunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusiunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
