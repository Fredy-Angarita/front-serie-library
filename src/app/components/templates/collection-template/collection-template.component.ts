import { Component, computed, effect, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/services/series/dtos/response/get.list.series.response.dto';
import { CollectionProviderService } from 'src/app/data/services/series/services/collection.provider.service';

@Component({
  selector: 'app-collection-template',
  templateUrl: './collection-template.component.html',
  styleUrls: ['./collection-template.component.scss'],
})
export class CollectionTemplateComponent implements OnInit{
  data: GetListCollectionResponse[] = [];
  constructor(private collectionProvider: CollectionProviderService){
    this.collectionProvider.getData().subscribe((series) => {
      this.data = series;
    });
  }
  ngOnInit(): void {

  }
}
