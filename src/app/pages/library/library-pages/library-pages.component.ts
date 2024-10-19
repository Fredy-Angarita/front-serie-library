import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryProviderService } from 'src/app/data/series/services/library.provider.service';
import { SeriesService } from 'src/app/data/series/services/series.service';

@Component({
  selector: 'app-library-pages',
  templateUrl: './library-pages.component.html',
  styleUrls: ['./library-pages.component.scss'],
})
export class LibraryPagesComponent implements OnInit {
  private page: number = 0;
  constructor(
    private dataProvider: LibraryProviderService,
    private seriesService: SeriesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.page = params['page'] | 0;
      this.seriesService.getAllSeries(this.page, 30).subscribe((library) => {
        this.dataProvider.setLibrary(library);
      });
    });
  }
}
