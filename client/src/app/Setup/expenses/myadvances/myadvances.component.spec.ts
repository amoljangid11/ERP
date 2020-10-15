import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadvancesComponent } from './myadvances.component';

describe('MyadvancesComponent', () => {
  let component: MyadvancesComponent;
  let fixture: ComponentFixture<MyadvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
