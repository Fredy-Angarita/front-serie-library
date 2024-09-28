import { Component, OnInit } from '@angular/core';
import { CollectionProviderService } from 'src/app/data/services/series/services/collection.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-library-pages',
  templateUrl: './library-pages.component.html',
  styleUrls: ['./library-pages.component.scss'],
})
export class LibraryPagesComponent implements OnInit {
  constructor(
    private dataProvider: CollectionProviderService,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((series) => {
      this.dataProvider.setData(series);
    });
  }
}
