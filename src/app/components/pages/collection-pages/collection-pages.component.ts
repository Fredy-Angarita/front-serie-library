import { Component, OnInit } from '@angular/core';
import { CollectionProviderService } from 'src/app/data/services/series/services/collection.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-collection-pages',
  templateUrl: './collection-pages.component.html',
  styleUrls: ['./collection-pages.component.scss'],
})
export class CollectionPagesComponent implements OnInit {
  constructor(
    private dataSeries: CollectionProviderService,
    private seriesService: SeriesService
  ) {}
  ngOnInit(): void {
    this.seriesService.getCollection().subscribe((series) => {
      this.dataSeries.setData(series.items);
    });
  }
}
