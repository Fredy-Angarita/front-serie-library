import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class AuthValidators extends Validators {
  static passwordMatch(
    password: string,
    confirmPassword: string
  ): ValidationErrors | null {
    return (group: AbstractControl): ValidationErrors | null => {
      const passwordControl = group.get(password);
      const confirmPasswordControl = group.get(confirmPassword);
      return passwordControl?.value === confirmPasswordControl?.value
        ? null
        : { passwordMatch: true };
    };
  }
}
