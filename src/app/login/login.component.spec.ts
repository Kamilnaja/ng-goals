import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain form group ', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('first field validity', () => {
    const login = component.loginForm.controls['login'];
    expect(login.valid).toBeFalsy();
  });

  it('password field validity', () => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('login form validity', () => {
    let errors = {};
    const login = component.loginForm.controls['login'];
    errors = login.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('login form should be valid after adding some data', () => {
    const login = component.loginForm.controls['login'];
    login.setValue('test');
    fixture.detectChanges();
    expect(login.valid).toBeTruthy();
  });

  it('login form validity', () => {
    let errors = {};
    const password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password form should be valid after adding some data', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('test');
    fixture.detectChanges();
    expect(password.valid).toBeTruthy();
  });
});
