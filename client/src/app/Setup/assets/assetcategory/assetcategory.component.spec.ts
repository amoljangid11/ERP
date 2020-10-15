import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcategoryComponent } from './assetcategory.component';

describe('AssetcategoryComponent', () => {
  let component: AssetcategoryComponent;
  let fixture: ComponentFixture<AssetcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
