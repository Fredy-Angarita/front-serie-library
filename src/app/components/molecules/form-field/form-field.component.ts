import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  private onChange = (value: string) => {};
  private onTouched = () => {};
  public control : FormControl = new FormControl();
  @Input() labelText: string = '';
  @Input() inputType: string = 'text';
  @Input() isRequired: boolean = false;
  @Input() placeholder: string = '';
  @Input() optionMaxLength: number = 0;
  @Input() optionMinLength: number = 0;
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void{
    if (this.optionMaxLength > 0) {
      this.control.setValidators([
        Validators.required,
        Validators.maxLength(this.optionMaxLength),
      ]);
    }

    if (this.optionMinLength > 0) {
      this.control.setValidators([
        Validators.required,
        Validators.minLength(this.optionMinLength),
      ]);
    }

    if (this.optionMinLength > 0 && this.optionMaxLength > 0) {
      this.control.setValidators([
        Validators.required,
        Validators.minLength(this.optionMinLength),
        Validators.maxLength(this.optionMaxLength),
      ]);
    }

    this.control.setValidators([
      Validators.required,
    ]);
  }
  onInput(event: any) {
    this.onChange(event.target.value);
  }
  getErrorMessage(): string {
    const errors = this.control.errors;
    if (errors?.['required']) {
      return 'Este campo es requerido';
    } else if (errors?.['minlength']) {
      return `Debe tener al menos ${errors?.['minlength'].requiredLength} caracteres`;
    } else if (errors?.['maxlength']) {
      return `Debe tener como máximo ${errors?.['maxlength'].requiredLength} caracteres`;
    }
    return '';
  }
  get value(): string {
    return this.control.value;
  }

  set value(value: string) {
    this.control.setValue(value);
    this.valueChange.emit(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
