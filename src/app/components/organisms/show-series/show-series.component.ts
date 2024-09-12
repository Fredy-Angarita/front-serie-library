import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowSeries } from 'src/app/data/interfaces/show-series.interface';
import { GetSeriesResponse } from 'src/app/data/services/series/dtos/response/get.series.interface';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-show-series',
  templateUrl: './show-series.component.html',
  styleUrls: ['./show-series.component.scss'],
})
export class ShowSeriesComponent implements OnInit {
  series: GetSeriesResponse = {
    id: '',
    title: '',
    synopsis: '',
    thumbnail: '',
    publicationDate: '',
    totalChapters: 0,
  };
  id!: string | null;
  details: boolean = false;
  @Input() total: number = 0;
  @Input() progress: number = 0;
  constructor(
    private router: ActivatedRoute,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.seriesService.getOneSeries(this.id).subscribe({
        next: series =>{
          this.series = series;
          console.log(this.series);
        },
      });
    }
  }
  showDetails() {
    this.details = !this.details;
  }
}
