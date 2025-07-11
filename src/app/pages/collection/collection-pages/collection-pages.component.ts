import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionProviderService } from 'src/app/data/series/services/collection.provider.service';
import { SeriesService } from 'src/app/data/series/services/series.service';

@Component({
  selector: 'app-collection-pages',
  templateUrl: './collection-pages.component.html',
  styleUrls: ['./collection-pages.component.scss'],
})
export class CollectionPagesComponent implements OnInit {
  private page: number = 0;
  totalItems: number = 0;
  constructor(
    private dataSeries: CollectionProviderService,
    private seriesService: SeriesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.page = params['page'] | 0;
      this.seriesService.getCollection(this.page, 30).subscribe((series) => {
        this.totalItems = series.totalItems;
        this.dataSeries.setData(series);
      });
    });
  }
}
