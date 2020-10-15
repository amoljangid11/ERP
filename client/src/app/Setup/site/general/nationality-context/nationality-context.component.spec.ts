import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityContextComponent } from './nationality-context.component';

describe('NationalityContextComponent', () => {
  let component: NationalityContextComponent;
  let fixture: ComponentFixture<NationalityContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
