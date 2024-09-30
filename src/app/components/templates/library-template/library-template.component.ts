import { Component, OnInit } from '@angular/core';
import { GetListCollectionResponse } from 'src/app/data/services/series/dtos/response/get.list.series.response.dto';
import { LibraryProviderService } from 'src/app/data/services/series/services/library.provider.service';

@Component({
  selector: 'app-library-template',
  templateUrl: './library-template.component.html',
  styleUrls: ['./library-template.component.scss']
})
export class LibraryTemplateComponent implements OnInit {
  library : GetListCollectionResponse[] = [];
  constructor (private libraryProvider: LibraryProviderService){}
  ngOnInit(): void {
    this.libraryProvider.getLibrary().subscribe((library) => {
      this.library = library;
    });
  }

}
