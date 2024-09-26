import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';

@Component({
  selector: 'app-collection-organisms',
  templateUrl: './collection-organisms.component.html',
  styleUrls: ['./collection-organisms.component.scss']
})
export class CollectionOrganismsComponent  implements OnChanges {
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
