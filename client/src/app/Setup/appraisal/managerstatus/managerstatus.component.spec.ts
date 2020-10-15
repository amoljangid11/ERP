import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStatusComponent } from './managerstatus.component';

describe('ManagerStatusComponent', () => {
  let component: ManagerStatusComponent;
  let fixture: ComponentFixture<ManagerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
