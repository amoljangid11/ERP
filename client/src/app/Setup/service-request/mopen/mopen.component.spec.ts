import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopenComponent } from './mopen.component';

describe('MopenComponent', () => {
  let component: MopenComponent;
  let fixture: ComponentFixture<MopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
