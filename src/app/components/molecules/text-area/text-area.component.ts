import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() idInput: string = '';
  @Input() control!: FormControl;
  @Input() nameTextArea: string = '';
  @Input() rows: number = 5;
  @Input() cols: number = 103;

  onInput(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.control.setValue(target.value);
  }

  getErrorMessage(): string {
    const errors = this.control.errors;
    if (errors?.['required']) {
      return 'Este campo es requerido';
    } else if (errors?.['wasEdited']) {
      return 'No puedes dejar el resumen igual';
    }
    return '';
  }
}
