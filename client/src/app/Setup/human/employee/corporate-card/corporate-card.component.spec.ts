import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCardComponent } from './corporate-card.component';

describe('CorporateCardComponent', () => {
  let component: CorporateCardComponent;
  let fixture: ComponentFixture<CorporateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
