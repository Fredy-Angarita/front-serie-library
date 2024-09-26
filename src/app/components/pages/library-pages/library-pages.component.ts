import { Component, OnInit } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';
import { SeriesDataService } from 'src/app/data/services/series/services/collection.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-library-pages',
  templateUrl: './library-pages.component.html',
  styleUrls: ['./library-pages.component.scss']
})
export class LibraryPagesComponent implements OnInit{
  constructor(private dataService: SeriesDataService,private seriesService : SeriesService) {}
  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((series) => {
      //this.dataService.setParentData(series as G);
    });
  }
}
