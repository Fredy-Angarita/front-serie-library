import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LABELS, PLACEHOLDERS, QUESTION_ACTIONS, TITLES, TYPE_BUTTONS } from 'src/app/data/constants/constants';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  title = TITLES.REGISTER;
  button_action = TYPE_BUTTONS.REGISTER;
  paragraph = QUESTION_ACTIONS.HAVE_ACCOUNT;
  action = QUESTION_ACTIONS.LOGIN_ACTION;
  username_label = LABELS.USERNAME;
  username_placeholder = PLACEHOLDERS.USERNAME;
  email_label = LABELS.EMAIL;
  email_placeholder = PLACEHOLDERS.EMAIL;
  password_label = LABELS.PASSWORD;
  password_placeholder = PLACEHOLDERS.PASSWORD;
  confirmation_label = LABELS.CONFIRM_PASSWORD;
  confirmation_placeholder = PLACEHOLDERS.CONFIRM_PASSWORD;
  registerForm: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)],],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmation: ['',[Validators.required, Validators.minLength(8)]]
    });
  }

  get usernameControl() {
    return this.registerForm.get('username') as FormControl;
  }
  get emailControl() {
    return this.registerForm.get('email') as FormControl;
  }
  get passwordControl() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmationControl() {
    return this.registerForm.get('confirmation') as FormControl;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log('form works');
  }
}
