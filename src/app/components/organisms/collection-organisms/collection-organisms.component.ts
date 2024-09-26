import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';
import { SeriesDataService } from 'src/app/data/services/series/services/series.provider.service';

@Component({
  selector: 'app-collection-organisms',
  templateUrl: './collection-organisms.component.html',
  styleUrls: ['./collection-organisms.component.scss']
})
export class CollectionOrganismsComponent  implements OnInit {
  data: GetCollectionResponse[] = [];
  filter: GetCollectionResponse[] = [];

  constructor(private dataShared: SeriesDataService) { }

  ngOnInit(): void {
    this.dataShared.getParentData().subscribe((data)  =>{
      this.data = data;
      this.filter = this.data;
    });
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
