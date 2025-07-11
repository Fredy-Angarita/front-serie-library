import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID,
} from '@angular/core';
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
import { PostLoginRequest } from 'src/app/data/auth/login/dtos/request/post.login.request';
import { AuthLoginService } from 'src/app/data/auth/login/services/auth.login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  serverError: string | null = null;
  email_label = LABELS.EMAIL;
  password_label = LABELS.PASSWORD;
  button_text = TYPE_BUTTONS.LOGIN;
  email_placeholder = PLACEHOLDERS.EMAIL;
  password_placeholder = PLACEHOLDERS.PASSWORD;
  title = TITLES.LOGIN;
  question = QUESTION_ACTIONS.NOT_HAVE_ACCOUNT;
  action = QUESTION_ACTIONS.REGISTER_ACTION;
  isBrowser!: boolean;
  @Output() changeEvent = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private loginService: AuthLoginService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loginForm = this.fb.nonNullable.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
    this.login();
  }
  onValueChange(controlName: string, value: string) {
    this.loginForm.get(controlName)?.setValue(value);
  }
  onChangeEvent(booleanSwitch: boolean) {
    this.changeEvent.emit(booleanSwitch);
  }
  login() {
    const { email, password } = this.loginForm.value;
    this.loginService.login({ email, password } as PostLoginRequest).subscribe({
      next: (response) => {
        if (this.isBrowser) {
          this.loginService.saveAccessToken(response.access_token);
        }
        this.router.navigate(['/collection']);
      },
      error: (error) => {
        this.serverError = error.error.message;
      },
    });
  }
  hasError() {
    return this.serverError !== null;
  }
  showLoginError(): string {
    if (this.serverError !== null) {
      return this.serverError;
    }
    return '';
  }
}
