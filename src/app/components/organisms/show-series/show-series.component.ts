import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetSeriesResponse } from 'src/app/data/services/series/dtos/response/get.series.response.dto';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-show-series',
  templateUrl: './show-series.component.html',
  styleUrls: ['./show-series.component.scss'],
})
export class ShowSeriesComponent {
  @Input() series!: GetSeriesResponse;
  id!: string | null;
  details: boolean = false;
  progress: number = 0;
  constructor() {}
  showDetails() {
    this.details = !this.details;
  }
}
