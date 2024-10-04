import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { GetListCollectionResponse } from 'src/app/data/services/series/dtos/response/get.list.series.response.dto';

@Component({
  selector: 'app-collection-organisms',
  templateUrl: './collection-organisms.component.html',
  styleUrls: ['./collection-organisms.component.scss'],
})
export class CollectionOrganismsComponent implements OnInit, OnChanges {
  @Input() data: GetListCollectionResponse[] = [];
  @Input() totalPage!: number;
  filter: GetListCollectionResponse[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { page: 0 },
      queryParamsHandling: 'merge',
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filter = this.data;
  }

  onChangePage(page: number) {
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
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
