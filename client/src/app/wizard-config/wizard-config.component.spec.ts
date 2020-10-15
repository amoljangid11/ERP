import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardConfigComponent } from './wizard-config.component';

describe('WizardConfigComponent', () => {
  let component: WizardConfigComponent;
  let fixture: ComponentFixture<WizardConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
