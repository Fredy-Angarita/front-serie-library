import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';
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
  private url = this.activeRoute.snapshot.paramMap.get('id') as string;
  private page = this.activeRoute.snapshot.queryParams['page'];
  private limit = this.activeRoute.snapshot.queryParams['limit'];
  private progress: GetProgressResponseDto[] = [];
  private canFetch = true;
  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly progressService: ProgressService,
    private readonly dataProvider: ProgressProviderService,
    private readonly seriesProvider: SeriesProviderService,
    private readonly seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    if (!this.url) return;
    this.obtainProgress();
    this.obtainSeries();
    this.addProgress();
    this.updatedProgress();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addProgress() {
    this.dataProvider
      .getAddProgress()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (progress) => {
          this.progress = [];
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
              this.progress = [];
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
  showMore(event: boolean) {
    if (event) {
      this.page = parseInt(this.page) + 1;
      this.obtainProgress();
    }
  }

  deleteProgress() {
    const confirmOption = confirm(
      'Are you sure you want to delete all progress?'
    );
    if (confirmOption) {
      this.progressService.deleteProgress(this.url).subscribe();
      this.progress = [];
      this.obtainProgress();
    }
  }

  obtainProgress() {
    if (!this.canFetch) return;
    this.progressService
      .getProgress(this.url, this.page, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (listProgress) => {
          if (listProgress.length !== 0) {
            this.progress = [...this.progress, ...listProgress];
            this.dataProvider.setListProgressData(this.progress);
          } else {
            this.canFetch = false;
          }
        },
      });
  }
}
