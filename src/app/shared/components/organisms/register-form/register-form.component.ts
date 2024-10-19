import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  LABELS,
  PLACEHOLDERS,
  QUESTION_ACTIONS,
  TITLES,
  TYPE_BUTTONS,
} from 'src/app/data/constants/constants';
import { PostRegisterRequest } from 'src/app/data/auth/register/dtos/request/post.register.request';
import { RegisterService } from 'src/app/data/auth/register/services/register.service';
import { AuthValidators } from 'src/app/shared/validators/auth.validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
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
  serverError: string | null = null;
  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmation: ['', [Validators.required]],
    });
    this.registerForm.setValidators(
      AuthValidators.passwordMatch('password', 'confirmation')
    );
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
    this.register();
  }

  register() {
    const { username, email, password } = this.registerForm.value;
    this.service
      .register({ username, email, password } as PostRegisterRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['/auth']);
        },
        error: (error) => {
          this.serverError = error.error.message;
        },
      });
  }

  hasError(): boolean {
    return (
      this.registerForm.errors?.['passwordMatch'] !== undefined ||
      this.serverError !== null
    );
  }

  formError(): string {
    if (this.registerForm.hasError('passwordMatch')) {
      return 'Las contraseñas no coinciden';
    }
    if (this.serverError !== null) {
      return this.serverError;
    }
    return '';
  }
}
