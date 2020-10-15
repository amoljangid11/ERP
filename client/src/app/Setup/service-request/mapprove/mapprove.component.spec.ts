import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapproveComponent } from './mapprove.component';

describe('MapproveComponent', () => {
  let component: MapproveComponent;
  let fixture: ComponentFixture<MapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
