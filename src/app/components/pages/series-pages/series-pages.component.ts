import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  private page: number = 0;
  private limit: number = 15;
  private progress: GetProgressResponseDto[] = [];
  private canFetch = true;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private progressService: ProgressService,
    private dataProvider: ProgressProviderService,
    private seriesProvider: SeriesProviderService,
    private seriesService: SeriesService
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
  obtainProgress() {
    if (!this.canFetch) return;
    this.progressService
      .getProgress(this.url, this.page, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (listProgress) => {
          this.progress = [...this.progress, ...listProgress.items];
          if (
            listProgress.totalItems === this.progress.length ||
            listProgress.items.length < this.limit
          ) {
            this.canFetch = false;
          }
          this.dataProvider.setListProgressData(this.progress);
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
  addProgress() {
    this.dataProvider
      .getAddProgress()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (progress) => {
          this.progress = [];
          this.progressService.postProgress(progress).subscribe({
            next: () => {
              this.updateProgressData();
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
              this.updateProgressData();
            },
          });
        },
      });
  }
  deleteProgress() {
    const confirmOption = confirm(
      'Are you sure you want to delete all progress?'
    );
    if (confirmOption) {
      this.progressService.deleteProgress(this.url).subscribe(() => {
        this.updateProgressData();
      });
    }
  }
  updateProgressData() {
    this.progress = [];
    this.progressService
      .getProgress(this.url, 0, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (listProgress) => {
          this.progress = listProgress.items;
          this.dataProvider.setListProgressData(this.progress);
        },
      });
  }
  showMore(event: boolean) {
    if (event && this.canFetch) {
      this.page += 1;
      this.obtainProgress();
    }
  }
}
