import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss']
})
export class FormActionsComponent {
  changeForm: boolean = true;
  @Input() button_text!: string;
  @Input() paragraph !: string;
  @Input() action !: string;
  @Output() onSwitchForm = new EventEmitter<boolean>();

  switchForm(){
    this.changeForm = !this.changeForm;
    this.onSwitchForm.emit(this.changeForm);
  }
}
