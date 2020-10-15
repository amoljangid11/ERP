import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConversionsComponent } from './currency-conversions.component';

describe('CurrencyConversionsComponent', () => {
  let component: CurrencyConversionsComponent;
  let fixture: ComponentFixture<CurrencyConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
