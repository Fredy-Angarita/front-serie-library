import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() controlID: string = '';
  @Input() control!: FormControl;

  onInput(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.control.setValue(target.value);
  }

  getErrorMessage(): string {
    const errors = this.control.errors;
    if (errors?.['required']) {
      return 'This field is required';
    }
    return '';
  }
}
