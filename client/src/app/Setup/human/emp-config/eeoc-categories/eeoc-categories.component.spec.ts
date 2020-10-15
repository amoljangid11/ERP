import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEOCCategoriesComponent } from './eeoc-categories.component';

describe('EEOCCategoriesComponent', () => {
  let component: EEOCCategoriesComponent;
  let fixture: ComponentFixture<EEOCCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEOCCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEOCCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
