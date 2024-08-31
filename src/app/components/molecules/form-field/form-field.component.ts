import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() nameInput!: string;
  @Input() idInput!: string;
  @Input() optionType!: string;
  @Input() optionPlaceholder!: string;
  @Input() value_input!: string;
  @Input() label_text!: string;
  @Input() control !: FormControl;

  onInput(event: any) {
    const target = event.target as HTMLInputElement;
    this.control.setValue(target.value);
  }
  getErrorMessage(): string {
    const errors = this.control.errors;

    if (errors?.['required']) {
      return 'Este campo es requerido';
    } else if (errors?.['minlength']) {
      return `Debe tener al menos ${errors?.['minlength'].requiredLength} caracteres`;
    } else if (errors?.['maxlength']) {
      return `Debe tener como máximo ${errors?.['maxlength'].requiredLength} caracteres`;
    }else if (errors?.['email']) {
      return `Debe ser un correo electrónico válido`;
    }else if (errors?.['passwordMatch']){
      return 'Las contraseñas no coinciden';

    }

    return '';
  }
}
