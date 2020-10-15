import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanddetailsComponent } from './canddetails.component';

describe('CanddetailsComponent', () => {
  let component: CanddetailsComponent;
  let fixture: ComponentFixture<CanddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
