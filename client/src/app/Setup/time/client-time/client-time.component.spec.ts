import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTimeComponent } from './client-time.component';

describe('ClientTimeComponent', () => {
  let component: ClientTimeComponent;
  let fixture: ComponentFixture<ClientTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
