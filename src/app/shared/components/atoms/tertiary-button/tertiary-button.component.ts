import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tertiary-button',
  templateUrl: './tertiary-button.component.html',
  styleUrls: ['./tertiary-button.component.scss']
})
export class TertiaryButtonComponent {
  @Input() button_color !: string;
  @Output() button_click = new EventEmitter<void>();

  onClickEvent(){
    this.button_click.emit();
  }

}
