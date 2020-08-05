import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'go-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;

  get login(): FormControl {
    return this.form.get('login') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    });
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
