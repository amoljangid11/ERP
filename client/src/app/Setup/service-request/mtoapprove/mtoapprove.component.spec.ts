import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoapproveComponent } from './mtoapprove.component';

describe('MtoapproveComponent', () => {
  let component: MtoapproveComponent;
  let fixture: ComponentFixture<MtoapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtoapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtoapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
