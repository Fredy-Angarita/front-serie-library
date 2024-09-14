import { Component, OnInit } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-library-pages',
  templateUrl: './library-pages.component.html',
  styleUrls: ['./library-pages.component.scss']
})
export class LibraryPagesComponent implements OnInit{
  data : GetCollectionResponse[] = [];
  constructor(private seriesService : SeriesService) {}
  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((series) => {
      this.data = series;
    });
  }
}
