import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationBasisComponent } from './remuneration-basis.component';

describe('RemunerationBasisComponent', () => {
  let component: RemunerationBasisComponent;
  let fixture: ComponentFixture<RemunerationBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemunerationBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemunerationBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
