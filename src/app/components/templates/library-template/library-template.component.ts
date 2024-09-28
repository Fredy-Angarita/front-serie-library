import { Component, OnInit } from '@angular/core';
import { LibraryProviderService } from 'src/app/data/services/series/services/library.provider.service';

@Component({
  selector: 'app-library-template',
  templateUrl: './library-template.component.html',
  styleUrls: ['./library-template.component.scss']
})
export class LibraryTemplateComponent implements OnInit {
  constructor (private libraryProvider: LibraryProviderService){}
  ngOnInit(): void {
    
  }

}
