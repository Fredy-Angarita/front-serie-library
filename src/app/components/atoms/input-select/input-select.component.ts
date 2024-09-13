import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  @Input() name!: string;
  @Input() selectID!: string;
  @Input() options!: any[];
  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();

  onSelectOption(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption.emit(target.value);
  }
}
