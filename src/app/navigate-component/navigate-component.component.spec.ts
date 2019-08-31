import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateCOmponentComponent } from './navigate-component.component';

describe('NavigateCOmponentComponent', () => {
  let component: NavigateCOmponentComponent;
  let fixture: ComponentFixture<NavigateCOmponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateCOmponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
