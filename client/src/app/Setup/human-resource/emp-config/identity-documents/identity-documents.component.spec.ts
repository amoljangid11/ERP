import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDocumentsComponent } from './identity-documents.component';

describe('IdentityDocumentsComponent', () => {
  let component: IdentityDocumentsComponent;
  let fixture: ComponentFixture<IdentityDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
