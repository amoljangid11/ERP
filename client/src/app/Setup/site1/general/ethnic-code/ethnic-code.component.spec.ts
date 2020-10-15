import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicCodeComponent } from './ethnic-code.component';

describe('EthnicCodeComponent', () => {
  let component: EthnicCodeComponent;
  let fixture: ComponentFixture<EthnicCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
