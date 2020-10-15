import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProjectsComponent } from './contact-projects.component';

describe('ContactProjectsComponent', () => {
  let component: ContactProjectsComponent;
  let fixture: ComponentFixture<ContactProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
