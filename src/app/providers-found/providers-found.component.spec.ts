import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersFoundComponent } from './providers-found.component';

describe('ProvidersFoundComponent', () => {
  let component: ProvidersFoundComponent;
  let fixture: ComponentFixture<ProvidersFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
