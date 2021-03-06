import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuComponent } from './header-menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains menu', () => {
    expect(fixture.nativeElement.querySelectorAll('ul').length).toEqual(1);
  });

  it('should menu have some items', () => {
    expect(fixture.nativeElement.querySelectorAll('li').length).toBeGreaterThanOrEqual(1);
  });
});
