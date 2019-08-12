import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'go-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  public get login() {
    return this.loginForm.get('login');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private service: LoginService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  handleSubmit() {
    this.validateAllFormFields();

    if (!this.loginForm.valid) {
      return;
    }

    this.service.submit(this.loginForm.value)
      .subscribe(item => console.log);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  private validateAllFormFields() {
    Object.keys(this.loginForm.controls).forEach((elem: string) => {
      this.loginForm.controls[ elem ].markAsTouched();
    });
  }
}
