import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnChanges {
  @Input() name!: string;
  @Input() size!: string;
  @Input() selectID!: string;
  @Input() options!: any[];
  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();
  showOptions = false;

  showOptionsList() {
    return (this.showOptions = !this.showOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.options);
  }
  onSelectOption(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption.emit(target.value);
  }
}
