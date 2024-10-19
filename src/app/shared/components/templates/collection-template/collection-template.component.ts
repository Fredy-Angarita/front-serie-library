import { Component, Input, OnInit } from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/series/dtos/response/get.list.series.response.dto';
import { CollectionProviderService } from 'src/app/data/series/services/collection.provider.service';

@Component({
  selector: 'app-collection-template',
  templateUrl: './collection-template.component.html',
  styleUrls: ['./collection-template.component.scss'],
})
export class CollectionTemplateComponent implements OnInit {
  data: GetListCollectionResponse[] = [];
  totalPage!: number;
  constructor(private collectionProvider: CollectionProviderService) {}

  ngOnInit(): void {
    this.collectionProvider.getData().subscribe((series) => {
      this.data = series.items;
      this.totalPage = series.totalItems / series.limit + 1;
    });
  }
}
