import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LABELS, PLACEHOLDERS, TYPE_BUTTONS } from 'src/app/data/constants/constants';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  email_label = LABELS.EMAIL;
  password_label = LABELS.PASSWORD;
  button_text = TYPE_BUTTONS.LOGIN;
  email_placeholder = PLACEHOLDERS.EMAIL;
  password_placeholder = PLACEHOLDERS.PASSWORD;
  
  constructor( private fb: FormBuilder) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['',[Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('form works');
  }
  onValueChange(controlName: string, value: string) {
    this.loginForm.get(controlName)?.setValue(value);
  }
}
