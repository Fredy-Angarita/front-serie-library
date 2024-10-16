import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class AuthValidators extends Validators {
  static passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const passwordControl = group.get(password);
      const confirmPasswordControl = group.get(confirmPassword);
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      return passwordControl.value === confirmPasswordControl.value
        ? null
        : { passwordMatch: true };
    };
  }
}
