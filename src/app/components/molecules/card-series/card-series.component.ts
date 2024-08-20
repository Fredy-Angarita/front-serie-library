import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.scss']
})
export class CardSeriesComponent {
  @Input() img !: string;
  @Input() series_title !: string;
}
