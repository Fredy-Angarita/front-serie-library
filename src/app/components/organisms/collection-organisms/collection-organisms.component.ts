import { Component, computed, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/services/series/dtos/response/get.list.series.response.dto';
import { CollectionProviderService } from 'src/app/data/services/series/services/collection.provider.service';

@Component({
  selector: 'app-collection-organisms',
  templateUrl: './collection-organisms.component.html',
  styleUrls: ['./collection-organisms.component.scss']
})
export class CollectionOrganismsComponent  implements OnInit {
  data = computed(() =>this.dataShared.getParentData()()); 
  filter: GetListCollectionResponse[] = [];

  constructor(private dataShared: CollectionProviderService) { }

  ngOnInit(): void {
    this.filter = this.data();
    console.log(this.data());
  }
  searchSeries(event: KeyboardEvent) {
    const search = event.target as HTMLInputElement;
    this.filter = this.filter.filter((series) => {
      return series.title.toLowerCase().includes(search.value.toLowerCase());
    })
    
    if(!search.value){
      this.filter = this.data();
    }
  }
}
