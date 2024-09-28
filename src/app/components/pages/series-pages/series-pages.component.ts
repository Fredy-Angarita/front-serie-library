import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressProviderService } from 'src/app/data/services/progress/services/progress.provider.service';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';
import { SeriesProviderService } from 'src/app/data/services/series/services/series.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-series-pages',
  templateUrl: './series-pages.component.html',
  styleUrls: ['./series-pages.component.scss'],
})
export class SeriesPagesComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private progressService: ProgressService,
    private dataProvider: ProgressProviderService,
    private seriesProvider: SeriesProviderService,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    const url = this.activeRoute.snapshot.paramMap.get('id') as string;
    if (!url) return;
    this.progressService.getProgress(url).subscribe({
      next: (progress) => {
        this.dataProvider.setProgressData(progress);
      },
    });
    this.seriesService.getOneSeries(url).subscribe({
      next: (series) => {
        this.seriesProvider.setData(series);
      },
    });
    this.dataProvider.getAddOrUpdateProgress().subscribe({
      next: (progress) => {
        this.progressService.postProgress(progress).subscribe();
        console.log(progress);
      },
    });
  }
}
