import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class EditValidators extends Validators {
  static wasEdited(resume?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (resume !== value) return null;
      return { wasEdited: true };
    };
  }
}
