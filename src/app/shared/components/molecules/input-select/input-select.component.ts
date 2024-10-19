import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetTypeSeriesResponseDto } from 'src/app/data/typeSeries/dtos/response/get.type-series.response.dto';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnChanges {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() selectID!: string;
  @Input() options!: GetTypeSeriesResponseDto[];
  @Output() selectedOption: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {}
  onSelectOption(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption.emit(+target.value);
  }
}
