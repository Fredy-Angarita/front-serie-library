import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProgressProviderService } from 'src/app/data/services/progress/services/progress.provider.service';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';
import { SeriesProviderService } from 'src/app/data/services/series/services/series.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-series-pages',
  templateUrl: './series-pages.component.html',
  styleUrls: ['./series-pages.component.scss'],
})
export class SeriesPagesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly progressService: ProgressService,
    private readonly dataProvider: ProgressProviderService,
    private readonly seriesProvider: SeriesProviderService,
    private readonly seriesService: SeriesService
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private url = this.activeRoute.snapshot.paramMap.get('id') as string;
  private page = this.activeRoute.snapshot.queryParams['page'];
  private limit = this.activeRoute.snapshot.queryParams['limit'];
  ngOnInit(): void {
    if (!this.url) return;
    this.obtainProgress();
    this.obtainSeries();
    this.addProgress();
    this.updatedProgress();
  }

  addProgress() {
    this.dataProvider
      .getAddProgress()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (progress) => {
          this.progressService.postProgress(progress).subscribe({
            next: () => {
              this.obtainProgress();
            },
          });
        },
      });
  }

  updatedProgress() {
    this.dataProvider
      .getEditProgress()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (progress) => {
          this.progressService.patchProgress(progress).subscribe({
            next: () => {
              this.obtainProgress();
            },
          });
        },
      });
  }

  obtainSeries() {
    this.seriesService
      .getOneSeries(this.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (series) => {
          this.seriesProvider.setData(series);
        },
      });
  }

  obtainProgress() {
    this.progressService
      .getProgress(this.url, this.page, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (progress) => {
          this.dataProvider.setListProgressData(progress);
        },
      });
  }
}
