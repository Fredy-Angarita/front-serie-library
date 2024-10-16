import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class EditValidators extends Validators {
  static wasEdited(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      if (value === null || value === undefined) {
        return null;
      }
      return value ? null : { wasEdited: true };
    };
  }
}
