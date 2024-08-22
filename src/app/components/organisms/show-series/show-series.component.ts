import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-series',
  templateUrl: './show-series.component.html',
  styleUrls: ['./show-series.component.scss']
})
export class ShowSeriesComponent {
  @Input() series_img !: string;
}
