import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/series/dtos/response/get.list.series.response.dto';
import { LibraryProviderService } from 'src/app/data/series/services/library.provider.service';

@Component({
  selector: 'app-library-template',
  templateUrl: './library-template.component.html',
  styleUrls: ['./library-template.component.scss'],
})
export class LibraryTemplateComponent implements OnInit, OnChanges {
  library: GetListCollectionResponse[] = [];
  @Input() pages!: number;
  constructor(private libraryProvider: LibraryProviderService) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.libraryProvider.getLibrary().subscribe((library) => {
      this.library = library.items;
      this.pages = library.totalItems / library.limit + 1;
    });
  }
}
