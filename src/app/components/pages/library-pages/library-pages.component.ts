import { Component, OnInit } from '@angular/core';
import { LibraryProviderService } from 'src/app/data/services/series/services/library.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-library-pages',
  templateUrl: './library-pages.component.html',
  styleUrls: ['./library-pages.component.scss'],
})
export class LibraryPagesComponent implements OnInit {
  constructor(
    private dataProvider: LibraryProviderService,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((library) => {
      this.dataProvider.setLibrary(library);
    });
  }
}
