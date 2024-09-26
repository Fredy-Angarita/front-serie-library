import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-collection-template',
  templateUrl: './collection-template.component.html',
  styleUrls: ['./collection-template.component.scss'],
})
export class CollectionTemplateComponent implements OnChanges {
  @Input() data: GetCollectionResponse[] = [];
  filter: GetCollectionResponse[] = [];
  ngOnChanges(): void {
    this.filter = this.data;
  }

  searchSeries(event: KeyboardEvent) {
    const search = event.target as HTMLInputElement;
    this.filter = this.data.filter((series) => {
      return series.title.toLowerCase().includes(search.value.toLowerCase());
    })
    
    if(!search.value){
      this.filter = this.data;
    }
  }
}
