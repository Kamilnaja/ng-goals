import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoginHttpService } from './login.httpService';

@Component({
  selector: 'go-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  get login(): FormControl {
    return this.loginForm.get('login') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder, private service: LoginHttpService) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.validateAllFormFields();

    if (!this.loginForm.valid) {
      return;
    }

    this.service.submit(this.loginForm.value).subscribe(item => console.log);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  private validateAllFormFields() {
    Object.keys(this.loginForm.controls).forEach((elem: string) => {
      this.loginForm.controls[elem].markAsTouched();
    });
  }
}
