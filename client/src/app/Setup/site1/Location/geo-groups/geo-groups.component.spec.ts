import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoGroupsComponent } from './geo-groups.component';

describe('GeoGroupsComponent', () => {
  let component: GeoGroupsComponent;
  let fixture: ComponentFixture<GeoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
