import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/services/series/dtos/response/get.list.series.response.dto';

@Component({
  selector: 'app-collection-organisms',
  templateUrl: './collection-organisms.component.html',
  styleUrls: ['./collection-organisms.component.scss'],
})
export class CollectionOrganismsComponent implements OnInit, OnChanges {
  @Input() data: GetListCollectionResponse[] = [];
  filter: GetListCollectionResponse[] = [];

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.filter = this.data;
  }

  searchSeries(event: KeyboardEvent) {
    const search = event.target as HTMLInputElement;
    this.filter = this.filter.filter((series) => {
      return series.title.toLowerCase().includes(search.value.toLowerCase());
    });

    if (!search.value) {
      this.filter = this.data;
    }
  }
}
